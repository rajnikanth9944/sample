package com.example.demo.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.example.demo.model.State;

public class StateSpec {
	
	public static Specification<State> searchByStateName(String state) {
		return new Specification<State>() {
			List<Predicate> predicates = new ArrayList<Predicate>();

			@Override
			public Predicate toPredicate(Root<State> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
				if (state != null) {
					predicates.add(cb.equal(root.<String> get("stateName"),"%"+ state+"%"));
				}
				return cb.and(predicates.toArray(new Predicate[predicates.size()]));
			}
		};
	}


}
