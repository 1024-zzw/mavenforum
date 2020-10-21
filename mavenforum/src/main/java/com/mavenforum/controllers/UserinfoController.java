package com.mavenforum.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageInfo;
import com.mavenforum.model.entity.Userinfo;
import com.mavenforum.model.services.UserinfoService;

@RestController
public class UserinfoController {
	public static final String CURRENTUSER = "CURRENTUSER";
	@Autowired
	private UserinfoService service;
	
	@RequestMapping("/adduser")
	public boolean doAddUser(Userinfo user) {
		return service.addUser(user);
	}
	
	@RequestMapping("/login")
	public Userinfo doLogin(Userinfo user,HttpSession session) {
		Userinfo result = service.checkLogin(user);
		if(null!=result) {
			session.setAttribute(CURRENTUSER, result);
			return result;	
		}
		else {
			return new Userinfo();
		}
	}
	
	@RequestMapping("/checkuid")
	public boolean checkLogin(String userid) {
		return service.checkUserid(userid);
	}
	
	@RequestMapping("/checkemail")
	public boolean checkemail(String userid,String email) {
		return service.checkEmail(userid, email);
	}
	
	@RequestMapping("/modpwd")
	public boolean modpwd(Userinfo user) {
		return service.modUserinfo(user);
	}
	
	@RequestMapping("getcuruser")
	public Userinfo doGetCurrentUserinfo(HttpSession session) {
		//从已登录的用户在登录时存放在seesion当中的用户详细信息
		//session.getAttribute(字符串)返回的时Object对象，因此需要向下强制转型为Userinfo
		return (Userinfo)session.getAttribute(CURRENTUSER);
	}
	
	@RequestMapping("/searchuser")
	public PageInfo<Userinfo> doSearchUser(Userinfo cond , int pageNum, int pageSize){
		return service.searchUserinfo(cond, pageNum, pageSize);
	}
	
	@RequestMapping("/moduser")
	public boolean doModUser(Userinfo user) {
		return service.modUser(user);
	}
	
	@RequestMapping("/deluser")
	public boolean doDelUser(String userid) {
		return service.delUserById(userid);
	}
}
