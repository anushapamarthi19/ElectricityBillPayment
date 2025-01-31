package com.example.electricitybillpayment.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.electricitybillpayment.domain.Bill;

public interface BillRepository extends JpaRepository<Bill, String> {
    Bill findBymeterNumber(String meterNumber);
    Optional<Bill> getByMeterNumber(String meterNumber);
}