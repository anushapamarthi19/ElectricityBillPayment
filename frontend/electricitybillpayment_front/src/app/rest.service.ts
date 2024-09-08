import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { UserBillDetails } from './user-bill-details-model';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl = 'http://localhost:8085'; // Base URL of your backend API

  constructor(private http: HttpClient) { }

  // Fetch user details by meter number
  public getUserDetailsByMeterNumber(meterNumber: string): Observable<any> {
    const url = `${this.baseUrl}/register/users/${meterNumber}`;
    return this.http.get<any>(url);
  }


    // Fetch billing details by meter number
    public getBillingDetailsByMeterNumber(meterNumber: string): Observable<any> {
      const url = `${this.baseUrl}/billing/bills/${meterNumber}`;
      return this.http.get<any>(url);
    }


  // Existing method for user registration
  public userDetails(registerDto: { email: string, firstName: string, lastName: string, city: string,
    boardState: string, meterNumber: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, registerDto, { responseType: 'text' as 'json' });
  }
}