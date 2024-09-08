import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeriveService } from '../serive.service';
import { Router } from '@angular/router';
//import { Router } from 'express';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit   {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private s:SeriveService,private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern(/^[A-Za-z'-]{2,50}$/)]],
      lastName: ['', [Validators.required,Validators.pattern(/^[A-Za-z'-]{2,50}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],
      meterNumber:['', Validators.required,Validators.pattern(/^\d{6,10}$/)],
      boardState:['', [Validators.required,Validators.pattern(/^[A-Za-z'-]{2,50}$/)]],
      city:['', Validators.required, Validators.pattern(/^[A-Za-z\s]{2,100}$/)],
    });
  }



  onSubmit() {
    console.log("abc");
    console.log(this.registerForm)
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.s.registerUser(this.registerForm.value).subscribe((response)=>
       console.log('succesful',response),
    error=>{
      if(error.status==200){
        console.log("abc");
        alert("registration successful")
        this.router.navigate(['/electricity'])
      }else{
        alert("registartion success")
        this.router.navigate(['/electricity'])
      }
      console.error('error',error)
    }

    )
  
  
    // this.s.registerUser(this.registerForm.value).subscribe((response)=>{
    //         console.log('sucessful',response);
    //     },error=> {
    //     console.error('error',error);
    //   })
  }

  onReset() {
    this.submitted = false;
    console.log(this.registerForm);
    this.registerForm.reset();
  }

//    registrationform!: FormGroup;
  
//   constructor(private fb:FormBuilder , private s:SeriveService){   
//   }
//   ngOnInit(): void {
//     this.registrationform=this.fb.group({
//       firstname:[''],
//       lastname:[],
//       email:[],
//       password:[],
//       city:[],
//       boardState:[],
//       meterNumber:[]

      
//     });
//   }
//   onSubmit(): void {
//     console.log("abc");
//     // console.log(this.registrationform.firstname);
//     // this.s.registerUser(user.value).subscribe((response)=>{
//       // console.log('sucessful',response);
//   // },error=> {
//   // console.error('error',error);
// // })
    
// }

  

}

