import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:3002";
  constructor(private http: HttpClient) { }

  login(user: any) {
    const httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url + '/login', user, httpoptions);
  }
}
