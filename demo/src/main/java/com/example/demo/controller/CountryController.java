package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Country;
import com.example.demo.service.CountryService;

@RestController
public class CountryController {

	@Autowired
	private CountryService CountryService;
	@RequestMapping(value = "/allCountry", method = RequestMethod.GET, produces = { "application/json", "application/xml" })
	public List<Country> findall() {
		return CountryService.getAllCountry();
	}
	
	@RequestMapping(value = "/searchallCountry", method = RequestMethod.GET, produces = { "application/json", "application/xml" })
	public List<Country>searchByallCountry(@RequestParam("term") String term) {
		return CountryService.searchByallCountry(term);
	}

}
