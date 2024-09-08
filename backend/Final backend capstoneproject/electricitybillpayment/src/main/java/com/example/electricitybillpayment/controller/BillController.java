package com.example.electricitybillpayment.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.electricitybillpayment.dto.BillDto;
import com.example.electricitybillpayment.impl.BillServiceImpl;
import com.example.electricitybillpayment.service.BillService;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/billing")
@CrossOrigin(origins = "http://localhost:4200/") // Allow requests from Angular app
public class BillController {
    @Autowired
    private BillService billService;
    @Autowired
    private BillServiceImpl billServiceImpl;

    @PostMapping
    public ResponseEntity<String> addBill(@RequestBody BillDto billDto) {
        billService.saveBill(billDto);
        return new ResponseEntity<>("Welcome to Bill Screen", HttpStatus.CREATED);
    }

    @GetMapping("/bills/{meterNumber}")
    public BillDto getBill(@PathVariable String meterNumber) {
        return billServiceImpl.getByMeterNumber(meterNumber);
    }
}