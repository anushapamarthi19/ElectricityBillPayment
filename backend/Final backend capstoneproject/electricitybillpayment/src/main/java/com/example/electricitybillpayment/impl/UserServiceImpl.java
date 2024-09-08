package com.example.electricitybillpayment.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.electricitybillpayment.domain.User;
import com.example.electricitybillpayment.dto.UserDto;
import com.example.electricitybillpayment.repository.UserRepository;
import com.example.electricitybillpayment.service.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;

    @Override
    public void saveUser(UserDto userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setMeterNumber(userDto.getMeterNumber());
        user.setBoardState(userDto.getBoardState());
        user.setCity(userDto.getCity());
        userRepository.save(user);
    }

    @Override
    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public UserDto getUserBymeterNumber(String meterNumber) {
        Optional<User> user = userRepository.findBymeterNumber(meterNumber);
        if (user.isPresent()) {
            User foundUser = user.get();
            return new UserDto(
                foundUser.getId(),
                foundUser.getFirstName(),
                foundUser.getLastName(),
                foundUser.getEmail(),
                foundUser.getPassword(),
                foundUser.getMeterNumber(),
                foundUser.getBoardState(),
                foundUser.getCity()
            );
        } else {
            throw new RuntimeException("User not found");
        }
    }
}