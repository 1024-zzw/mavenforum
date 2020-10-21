package com.mavenforum.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mavenforum.model.dao.UserinfoMapper;
import com.mavenforum.model.entity.Userinfo;
import com.mavenforum.model.entity.UserinfoExample;
import com.mavenforum.model.entity.UserinfoExample.Criteria;


@Service
public class UserinfoService {
	@Autowired
	private UserinfoMapper userinfoMapper;
	
	public boolean addUser(Userinfo user) {
		boolean isOK= checkUserid(user.getUserid());
		if(!isOK) {
			return false;
		}
		userinfoMapper.insert(user);
		return true;
	}
	
	public boolean checkUserid(String userid) {
		UserinfoExample example= new UserinfoExample();
		Criteria cc = example.createCriteria();
		cc.andUseridEqualTo(userid);
		List<Userinfo> list = userinfoMapper.selectByExample(example);
		return list.size() == 0;
	}
	
	public boolean checkEmail(String userid,String email) {
		UserinfoExample example= new UserinfoExample();
		Criteria cc = example.createCriteria();
		cc.andUseridEqualTo(userid);
		cc.andEmailEqualTo(email);
		List<Userinfo> list = userinfoMapper.selectByExample(example);
		return list.size() == 0 ;
	}
	public Userinfo checkLogin(Userinfo user) {
		UserinfoExample example=new UserinfoExample();
		Criteria cc=example.createCriteria();
		cc.andUseridEqualTo(user.getUserid());
		cc.andUserpwdEqualTo(user.getUserpwd());
		List<Userinfo> list = userinfoMapper.selectByExample(example);
		if(list.size()>0) {
			return list.get(0);
		}else {
			return null;
		}
	}
	
	public boolean modUserinfo(Userinfo user) {
		boolean isOK = checkEmail(user.getUserid(),user.getEmail());
		if(!isOK) {
			userinfoMapper.updateByPrimaryKeySelective(user);
			return true;
		}else {
			return false;
		}
		
		
	}
	
	public boolean modUser(Userinfo user) {
		userinfoMapper.updateByPrimaryKeySelective(user);
		return true;
	}
	
	public PageInfo<Userinfo> searchUserinfo(Userinfo cond,int pageNum,int pageSize){
		UserinfoExample example = new UserinfoExample();
		Criteria cc = example.createCriteria();
		//因为Userid的类型为Integer(属于int基本类型的包装类)
		if(null != cond.getUserid()) {
			//(1)添加id查询条件，如果有userid就拿userid查询
			cc.andUseridEqualTo(cond.getUserid());
		}
		
		//凡是字符串的判断都有两个判断
		//判断1：是不是null
		//判断2：是不是空字符串
		//注意字符串的判断不能使用==或!=；而是要使用equals
		if(null != cond.getUserid() && !"".equals(cond.getUserid())) {
			//(2)添加用户名条件，使用模糊查询(在逆向工程生成的UserinfoMapper.java里给出方法)
			//有like就得使用通配符"%"包含字符串"%"
			cc.andUseridEqualTo(cond.getUserid());
		}
	
		
		//启动分页插件(需要将你这次分页的当前页数和每页的条数传入)
		PageHelper.startPage(pageNum, pageSize);
		
		//实施查询
		List<Userinfo> list = userinfoMapper.selectByExample(example);
		
		//返回值(通过构造器将list中的Userinfo对象数据传入到PageInfo里的结果集List中去
		//<Userinfo>代表里PageInfo里的List结果集的类型是Userinfo
		return new PageInfo<Userinfo>(list);
	}
	
	public boolean delUserById(String userid) {
		return userinfoMapper.deleteByPrimaryKey(userid)>0;
	}
}
