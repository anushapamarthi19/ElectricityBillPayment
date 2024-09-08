package com.example.electricitybillpayment.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.electricitybillpayment.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);
    Optional<User> findBymeterNumber(String meterNumber);
}