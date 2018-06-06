package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.model.UserDto;

public interface RegistrationService {

	void userRegistration(User user);

	void userLogin(UserDto userDto);

}
