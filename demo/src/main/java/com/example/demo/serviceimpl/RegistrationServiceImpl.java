package com.example.demo.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.model.UserDto;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.RegistrationService;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public void userRegistration(User user) {
		userRepository.save(user);
	}

	@Override
	public void userLogin(UserDto userDto) {
		User dbUser = userRepository.findByEmailAndPassword(userDto.getUsername(), userDto.getPassword());
		if (dbUser == null) {
			throw new RuntimeException("User Does not Exist");
		}
	}

}
