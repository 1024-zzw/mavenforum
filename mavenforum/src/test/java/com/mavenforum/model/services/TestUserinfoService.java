package com.mavenforum.model.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.mavenforum.model.entity.Userinfo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext.xml" })
public class TestUserinfoService {

	@Autowired
	private UserinfoService service;
	
	@Test
	public void testaddUser(){
		boolean addUser = service.addUser(new Userinfo("123a","123","669325130@qq.com"));
		System.out.println(addUser);
	}
	@Test
	public void testlogin() {
		Userinfo result = service.checkLogin(new Userinfo("2018201602","1234","669325130@qq.com"));
		if(null!=result) {
			System.out.println(result);
		}
		else {
			System.out.println("null");
		}
	}
	
}
