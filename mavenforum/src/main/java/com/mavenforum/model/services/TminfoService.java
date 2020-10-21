package com.mavenforum.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mavenforum.model.dao.TminfoMapper;
import com.mavenforum.model.entity.Tminfo;
import com.mavenforum.model.entity.TminfoExample;
import com.mavenforum.model.entity.TminfoExample.Criteria;

@Service
public class TminfoService {
	
	@Autowired
	private TminfoMapper tminfoMapper;
	
	public boolean addtm(Tminfo tm) {
		tminfoMapper.insert(tm);
		return true;
	}
	
	public PageInfo<Tminfo> searchTminfo(Tminfo tm,int pageNum,int pageSize){
		TminfoExample example = new TminfoExample();
		Criteria cc = example.createCriteria();
		cc.andUseridEqualTo(tm.getUserid());
		PageHelper.startPage(pageNum, pageSize);
		List<Tminfo> list = tminfoMapper.selectByExample(example);
		return new PageInfo<Tminfo>(list);
	}
}
