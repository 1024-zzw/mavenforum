package com.mavenforum.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavenforum.model.dao.AdmininfoMapper;
import com.mavenforum.model.entity.Admininfo;
import com.mavenforum.model.entity.AdmininfoExample;
import com.mavenforum.model.entity.AdmininfoExample.Criteria;


@Service
public class AdmininfoService {

	@Autowired
	private AdmininfoMapper admininfoMapper;
	
	
	
	public Admininfo checklogin(Admininfo admin) {
		AdmininfoExample example=new AdmininfoExample();
		Criteria cc=example.createCriteria();
		cc.andAdminidEqualTo(admin.getAdminid());
		cc.andAdminpwdEqualTo(admin.getAdminpwd());
		List<Admininfo> list = admininfoMapper.selectByExample(example);
		if(list.size()>0) {
			return list.get(0);
		}else {
			return null;
		}
	}
	
	public boolean addAdmin(Admininfo admin) {
		boolean isOK= checkAdminid(admin.getAdminid());
		if(!isOK) {
			return false;
		}
		admininfoMapper.insert(admin);
		return true;
	}
	
	public boolean checkAdminid(String adminid) {
		AdmininfoExample example = new AdmininfoExample();
		Criteria cc = example.createCriteria();
		cc.andAdminidEqualTo(adminid);
		List<Admininfo> list  = admininfoMapper.selectByExample(example);
		return list.size() == 0;
	}
}
