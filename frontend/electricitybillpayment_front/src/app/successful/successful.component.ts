import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrl: './successful.component.css'
})
export class SuccessfulComponent {
  constructor (private r:Router){
   
  }
  home(){
    this.r.navigate(['/electricity']);
  }

}
