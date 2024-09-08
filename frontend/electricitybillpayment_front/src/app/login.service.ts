import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8085/login';  // Adjust if your backend URL changes

  constructor(private http: HttpClient) { }

  public login(loginDto: { email: string, password: string }): Observable<string> {
    return this.http.post<string>(this.baseUrl, loginDto, { responseType: 'text' as 'json' });
  }
}
