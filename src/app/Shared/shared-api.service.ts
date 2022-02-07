import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  readonly APIUrl = "https://localhost:44370/api/Users";
  constructor(private http:HttpClient) {
   }

   getAllUsersData():Observable<any[]>{
     return this.http.get<any>(this.APIUrl + '/GetAllUsersData');
    }

    SignUpUser(val:any){
      return this.http.post<any>(this.APIUrl + '/SignUpUser', val);
    }
}
