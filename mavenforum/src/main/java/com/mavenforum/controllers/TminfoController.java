package com.mavenforum.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageInfo;
import com.mavenforum.model.entity.Tminfo;
import com.mavenforum.model.services.TminfoService;

@RestController
public class TminfoController {

	@Autowired
	private TminfoService service;
	
	@RequestMapping("/addtm")
	public boolean doAddtm(Tminfo tm) {
		return service.addtm(tm);
	}
	
	@RequestMapping("/searchtm")
	public PageInfo<Tminfo> doSearchTm(Tminfo tm,int pageNum,int pageSize){
		return service.searchTminfo(tm, pageNum, pageSize);
	}
}
