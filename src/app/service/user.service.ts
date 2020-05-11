import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  CreateUser(data): Observable<User> {
    return this.http.post<User>(this.baseurl + '', JSON.stringify(data), this.httpOptions);
  }

  // GET
  GetIssue(id): Observable<User> {
    return this.http.get<User>(this.baseurl + '' + id);

  }

  // GET
  GetIssues(): Observable<User> {
    return this.http.get<User>(this.baseurl + '');

  }

}

