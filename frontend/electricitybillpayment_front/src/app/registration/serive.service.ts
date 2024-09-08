import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriveService {



  baseUrl='http://localhost:8080/register';

  constructor(private http:HttpClient) { }
 
     public registerUser (userDto:any ):Observable<any>
     {
      return this.http.post(this.baseUrl,userDto);
     }
  }