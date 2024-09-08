package com.example.electricitybillpayment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.electricitybillpayment.domain.User;
import com.example.electricitybillpayment.dto.LoginDto;
import com.example.electricitybillpayment.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:4200/") // Allow requests from Angular app
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<String> login(@Validated @RequestBody LoginDto loginDto) {
        User user = userService.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        if (user != null) {
            return new ResponseEntity<>("login success", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("invalid credentials", HttpStatus.UNAUTHORIZED);
        }
    }
}