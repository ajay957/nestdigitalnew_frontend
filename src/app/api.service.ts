import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addemployee",dataToSend)
  }
  fetchEmployee=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  deleteEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/delete",dataToSend)
  }

}
