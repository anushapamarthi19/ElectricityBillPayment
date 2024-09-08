package com.example.electricitybillpayment.domain;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String billNumber;
	
	private Long amount;
	
	private String billingDate;
	
	private String dueDate;
	
	private String status;
	
	private Long units;
	
	private String meterNumber;
	
	private String boardState;
	
	private String city;
	
	
	
	
	
	
	
	
	
	
	
	

	public Long getUnits() {
		return units;
	}

	public void setUnits(Long units) {
		this.units = units;
	}

	public String getMeterNumber() {
		return meterNumber;
	}

	public void setMeterNumber(String meterNumber) {
		this.meterNumber = meterNumber;
	}

	public String getBoardState() {
		return boardState;
	}

	public void setBoardState(String boardState) {
		this.boardState = boardState;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBillNumber() {
		return billNumber;
	}

	public void setBillNumber(String billNumber) {
		this.billNumber = billNumber;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public String getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(String string) {
		this.billingDate = string;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Bill [id=" + id + ", billNumber=" + billNumber + ", amount=" + amount + ", billingDate=" + billingDate
				+ ", dueDate=" + dueDate + ", status=" + status + ", getId()=" + getId() + ", getBillNumber()="
				+ getBillNumber() + ", getAmount()=" + getAmount() + ", getBillingDate()=" + getBillingDate()
				+ ", getDueDate()=" + getDueDate() + ", getStatus()=" + getStatus() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public Bill(Long id, String billNumber, Long amount, String billingDate, String dueDate, String status) {
		super();
		this.id = id;
		this.billNumber = billNumber;
		this.amount = amount;
		this.billingDate = billingDate;
		this.dueDate = dueDate;
		this.status = status;
	}
	

	
	public Bill() {
}
	
}
