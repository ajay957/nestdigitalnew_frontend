import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  empcode=""

  searchData:any=[]

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"empcode":this.empcode}
    console.log(data);
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response);
        if (response.length == 0) {
          alert("invalid employee code")
          
        } else {
          this.searchData=response 
        }

      }
    )
  }
  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("employee deleted successfully")
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }
}
