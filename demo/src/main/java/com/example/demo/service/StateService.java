package com.example.demo.service;

import java.util.List;

import com.example.demo.model.State;

public interface StateService {

	List<State> getAllStates();

	List<State> searchByallStates(String term);

}
