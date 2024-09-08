package com.example.electricitybillpayment.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.electricitybillpayment.domain.Bill;
import com.example.electricitybillpayment.dto.BillDto;
import com.example.electricitybillpayment.repository.BillRepository;
import com.example.electricitybillpayment.service.BillService;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    public BillRepository billRepository;

    @Override
    public void saveBill(BillDto billDto) {
        Bill bill = new Bill();
        bill.setBillNumber(billDto.getBillNumber());
        bill.setAmount(billDto.getAmount());
        bill.setBillingDate(billDto.getBillingDate());
        bill.setDueDate(billDto.getDueDate());
        bill.setStatus(billDto.getStatus());
        bill.setMeterNumber(billDto.getMeterNumber());
        bill.setUnits(billDto.getUnits());

        billRepository.save(bill);
    }

    @Override
    public Bill findBymeterNumber(String meterNumber) {
        return billRepository.findBymeterNumber(meterNumber);
    }

    public BillDto getByMeterNumber(String meterNumber) {
        Optional<Bill> bill = billRepository.getByMeterNumber(meterNumber);
        if (bill.isPresent()) {
            Bill foundBill = bill.get();
            return new BillDto(
                    foundBill.getId(),
                    foundBill.getBillNumber(),
                    foundBill.getAmount(),
                    foundBill.getBillingDate(),
                    foundBill.getDueDate(),
                    foundBill.getStatus(),
                    foundBill.getUnits(),
                    foundBill.getMeterNumber()
            );
        } else {
            throw new RuntimeException("Bill not found for this meter number");
        }
    }
}