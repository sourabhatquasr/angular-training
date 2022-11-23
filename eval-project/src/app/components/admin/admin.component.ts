import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  login1:any=new FormGroup({

    email:new FormControl(""),
    password:new FormControl("")

  })
  msg:any;
  clr={red:false,green:false}
  

  constructor(public api:ApiService,public r:Router) { }

  ngOnInit(): void {
  }

  log(){
    console.log(this.login1.value)
    
    const data=new FormData()
    data.append("userEmail",this.login1.value.email)
    data.append("userPassword",this.login1.value.password)

    this.api.login(data).subscribe((result:any)=>{
    console.log(result)
    this.msg=result.message

    if(result.status==1){
        this.clr={red:false,green:true}
        this.r.navigate(['/dashboard']);
        localStorage.setItem("email",this.login1.value.email);
    }else{
      this.clr={red:true,green:false}
    }
   })

  }

}
