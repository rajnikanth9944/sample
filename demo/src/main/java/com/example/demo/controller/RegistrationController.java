package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.model.UserDto;
import com.example.demo.service.RegistrationService;
@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService;
	@RequestMapping(value = "/registration", method = RequestMethod.POST, produces = { "application/json", "application/xml" })
	public @ResponseBody void userRegistration(@RequestBody User user) {
		registrationService.userRegistration(user);
	}
	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = { "application/json", "application/xml" })
	public @ResponseBody void userLogin(@RequestBody UserDto userDto) {
		registrationService.userLogin(userDto);
	}

}
