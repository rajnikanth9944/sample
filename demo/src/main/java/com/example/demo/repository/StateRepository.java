package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.State;

@Repository
public interface StateRepository  extends PagingAndSortingRepository<State, Long>,JpaSpecificationExecutor<State>{

	public static final  String  search="Select c from State c where c.name  like %:name%";
	@Query(search)
	List<State> searchAllStates(@Param("name") String name);
	
}
