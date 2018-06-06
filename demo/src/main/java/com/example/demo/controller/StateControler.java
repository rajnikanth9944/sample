package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.State;
import com.example.demo.service.StateService;
@RestController

public class StateControler {

	@Autowired
	private StateService StateService;
	@RequestMapping(value = "/allStates", method = RequestMethod.GET, produces = { "application/json", "application/xml" })
	public List<State> findall() {
		return StateService.getAllStates();
	}
	@RequestMapping(value = "/searchallStates", method = RequestMethod.GET, produces = { "application/json", "application/xml" })
	public List<State> searchByallStates(@RequestParam("term") String term) {
		return StateService.searchByallStates(term);
	}

	
}
