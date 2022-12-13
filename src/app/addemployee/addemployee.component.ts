import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  empcode=""
  empname=""
  address=""
  phno=""
  email=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"empcode":this.empcode,"empname":this.empname,"address":this.address,"phno":this.phno,"email":this.email,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          alert("employee added successfully")
          this.empcode=""
          this.empname=""
          this.address=""
          this.phno=""
          this.email=""
          this.username=""
          this.password=""
        }
      }
    )
  }
}
