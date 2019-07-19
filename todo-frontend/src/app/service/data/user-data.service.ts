import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL, API_URL } from 'src/app/app.contants';
import { User } from 'src/app/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllUsers(username) {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  createUser (user) {
    return this.http.post(`${API_URL}/users`, user);
  }
}
