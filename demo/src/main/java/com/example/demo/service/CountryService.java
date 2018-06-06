package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Country;


public interface CountryService {

	List<Country> getAllCountry();

	List<Country> searchByallCountry(String term);

}