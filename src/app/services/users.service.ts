import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IUsers } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL: string = 'http://localhost:8081/users/login';


  constructor(private httpClient: HttpClient) {}

  getUsers():Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(this.apiURL);
  }

  addUser(u: IUsers):Observable<IUsers> {
    return this.httpClient.post<IUsers>(this.apiURL, u);
  }
}
