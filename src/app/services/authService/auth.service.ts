import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any>{
     return this.http.post(`${environment.apiBaseUrl}Auth/login`, model)
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    
    if (!token) {
      return false;
    }

    try {
      const payload: any = jwtDecode(token);
      const now = new Date().getTime() / 1000;
      return payload.exp > now;
      
    }catch (e) {
      return false;
    }
  }
}
