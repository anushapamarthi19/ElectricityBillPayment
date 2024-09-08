import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrl: './paymentpage.component.css'
})
export class PaymentpageComponent {
  cardForm: FormGroup;
  upiForm: FormGroup;
  netBankingForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.cardForm = this.fb.group({
      cardNo: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });

    this.upiForm = this.fb.group({
      upiId: ['', [Validators.required, Validators.email]] // Assuming UPI ID is an email-like format
    });

    this.netBankingForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      alert('successful');
      this.router.navigate(['/successful']);
    } else {
      ('Form is invalid');
    }
  }


}
