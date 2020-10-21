package com.mavenforum.model.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.mavenforum.model.entity.Tminfo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext.xml" })
public class TestTminfoService {
	@Autowired
	private TminfoService service;
	@Test
	public void testaddtm() {
		boolean addtm =service.addtm(new Tminfo("2018201602","2020-02-08"));
		System.out.println(addtm);
	}
}
