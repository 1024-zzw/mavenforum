package com.mavenforum.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mavenforum.model.entity.Admininfo;

import com.mavenforum.model.services.AdmininfoService;

@RestController
public class AdmininfoController {
	@Autowired
	private AdmininfoService service;
	
	@RequestMapping("/addadmin")
	public boolean doAddadmin(Admininfo admin) {
		return service.addAdmin(admin);
	}
	
	@RequestMapping("/adminlogin")
	public Admininfo doAdminLogin(Admininfo admin) {
		Admininfo result = service.checklogin(admin);
		if(null!=result) {
		
			return result;	
		}
		else {
			return new Admininfo();
		}
	}
	
}
