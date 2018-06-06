package com.example.demo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import com.example.demo.service.CountryService;




@Service
public class CountryServiceimpl implements CountryService {

	@Autowired
	private CountryRepository countryRepository;

	@Override
	public List<Country> getAllCountry() {
		return (List<Country>) countryRepository.findAll();
	}

	@Override
	public List<Country> searchByallCountry(String term) 
	{
		
		return countryRepository.searchAllCountry(term);
	}

}



