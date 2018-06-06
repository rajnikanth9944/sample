package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Country;


@Repository
public interface CountryRepository  extends PagingAndSortingRepository<Country, Long>,JpaSpecificationExecutor<Country>{

	public static final  String  search="Select c from Country c where c.name  like %:name%";
	@Query(search)
	List<Country> searchAllCountry(@Param("name") String name);
	
}