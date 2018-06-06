package com.example.demo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.State;
import com.example.demo.repository.StateRepository;
import com.example.demo.service.StateService;

@Service
public class StateServiceimpl implements StateService {

	@Autowired
	private StateRepository stateRepository;

	@Override
	public List<State> getAllStates() {
		// TODO Auto-generated method stub
		return (List<State>) stateRepository.findAll();
	}

	@Override
	public List<State> searchByallStates(String term) {
		// TODO Auto-generated method stub
		return stateRepository.searchAllStates(term);
	}

}
