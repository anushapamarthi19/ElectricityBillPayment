package com.example.electricitybillpayment.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.electricitybillpayment.dto.UserDto;
import com.example.electricitybillpayment.impl.UserServiceImpl;
import com.example.electricitybillpayment.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "http://localhost:4200/") // Allow requests from Angular app
public class RegistrationController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping
    public ResponseEntity<String> registerUser(@Validated @RequestBody UserDto userDto) {
        userService.saveUser(userDto);
        return new ResponseEntity<>("user registered successfully", HttpStatus.CREATED);
    }

    @GetMapping("/users/{meterNumber}")
    public UserDto getUser(@PathVariable String meterNumber) {
        return userServiceImpl.getUserBymeterNumber(meterNumber);
    }
}