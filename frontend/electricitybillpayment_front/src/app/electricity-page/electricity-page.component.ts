/*import { Component } from '@angular/core';

interface UserBillDetails {
  userId: string;
  meterNo: string;
  rrNo: string;
  unitsConsumed: number;
  month: string;
  year: number;
  amount: number;
}

@Component({
  selector: 'app-electricity-page',
  templateUrl: './electricity-page.component.html',
  styleUrl: './electricity-page.component.css'
})
export class ElectricityPageComponent {
  userId: string = '';
  userDetails: UserBillDetails = {
      userId: '12345',
      meterNo: '6564478955',
      rrNo: 'RR989898',
      unitsConsumed: 300,
      month: 'August',
      year: 2024,
      amount: 1300
  };

  fetchUserDetails() {
      console.log('Fetch user details clicked..');
  }

firstName
lastName
meterNumber
billNumber
boardState
city
email
unitsConsumed
billDate
dueDate
amount
status

  }*/



/*
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface UserBillDetails {
  userId: string;
  meterNo: string;
  rrNo: string;
  unitsConsumed: number;
  month: string;
  year: number;
  amount: number;
}


@Component({
  selector: 'app-electricity-page',
  templateUrl: './electricity-page.component.html',
  styleUrl: './electricity-page.component.css'
})
export class ElectricityPageComponent {
  userId: string = '';
  userDetails: UserBillDetails | null = null;  // Initialize with null to handle no data state
  apiUrl: string = 'http://localhost:8080/api/user-details'; // Replace with your backend URL


  constructor(private http: HttpClient) {}


  fetchUserDetails() {
    if (this.userId) {
      this.http.get<UserBillDetails>(`${this.apiUrl}/${this.userId}`)
        .subscribe({
          next: (response) => {
            this.userDetails = response; // Assign response to userDetails
            console.log('User details fetched:', this.userDetails);
          },
          error: (error) => {
            console.error('Error fetching user details:', error);
            this.userDetails = null; // Clear user details on error
          }
        });
    }
  }
}*/





import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electricity-page',
  templateUrl: './electricity-page.component.html',
  styleUrls: ['./electricity-page.component.css']
})
export class ElectricityPageComponent implements OnInit {
  electricityForm!: FormGroup;
  userDetails: any;
  billingDetails: any;
  errorMessage: string='';

  constructor(private fb: FormBuilder, private rest: RestService,private router:Router) {}

  ngOnInit(): void {
    // Initialize the form group
    this.electricityForm = this.fb.group({
      meterNumber: ['']
    });
  }

  onSubmit(): void {
    if (this.electricityForm.valid) {
      const { meterNumber } = this.electricityForm.value;
      this.errorMessage='';

      // Fetch user details by meter number
      this.rest.getUserDetailsByMeterNumber(meterNumber).subscribe(
        response => {
          this.userDetails = response;
          console.log('User details:', this.userDetails); // Debugging line

          if(this.userDetails){

             // Fetch billing details by meter number after user details
             this.rest.getBillingDetailsByMeterNumber(meterNumber).subscribe(
              billingResponse => {
                this.billingDetails = billingResponse;
                console.log('Billing details:', this.billingDetails); // Debugging line
              },
              error => {
                this.errorMessage = 'unable to fetch billing details.';
                console.error('Error fetching billing details:', error);
              }
            );
          }else{
            this.errorMessage = 'Invalid Meter Number';
          }
        },
        error => {
          this.errorMessage='Invalid Meter Number';
          console.error('Error fetching user details:', error);
        }
      );
    }
  }
  pay(){
    this.router.navigate(['/payment'])

  }
}
