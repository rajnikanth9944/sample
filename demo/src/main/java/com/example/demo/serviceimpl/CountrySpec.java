package com.example.demo.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.example.demo.model.Country;


public class CountrySpec {
	
	public static Specification<Country> searchByCountryName(String country) {
		return new Specification<Country>() {
			List<Predicate> predicates = new ArrayList<Predicate>();

			@Override
			public Predicate toPredicate(Root<Country> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
				if (country != null) {
					predicates.add(cb.equal(root.<String> get("CountryName"),"%"+ country+"%"));
				}
				return cb.and(predicates.toArray(new Predicate[predicates.size()]));
			}
		};
	}


}

