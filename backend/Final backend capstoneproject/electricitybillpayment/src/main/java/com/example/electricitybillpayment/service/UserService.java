package com.example.electricitybillpayment.service;

import com.example.electricitybillpayment.domain.User;
import com.example.electricitybillpayment.dto.UserDto;

public interface UserService {
    void saveUser(UserDto userDto);
    User findByEmailAndPassword(String email, String password);
}