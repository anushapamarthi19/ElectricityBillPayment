import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';  
  successMessage: string = '';  

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.loginService.login({ email, password }).subscribe(
        response => {
          console.log('Response from server:', response);  // Debugging line
          if (response.trim() === 'login success') {
           // this.successMessage = 'Login successful!';
           alert("successful")
            this.router.navigate(['/electricity']);

            this.errorMessage = '';
            // Optionally navigate to another page or store user info
          
          } else {
           // this.errorMessage = 'Invalid credentials';
           alert("invalid")
            this.successMessage = '';
          }
        },
        error => {
          // Check if the error status code is 401
          console.log('Error response from server:', error);
          if (error.status === 401) {
            this.errorMessage = 'Invalid credentials';
          } else {
            this.errorMessage = 'An error occurred';
          }
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Form is invalid';
      this.successMessage = '';
    }
  }

  // navigateToRegister(): void {
   // this.router.navigate(['/register']);

    navigateToRegister(): void {
      this.router.navigate(['/Electricity']);
  }
}
