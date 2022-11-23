import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {
email:any;
  constructor(public r:Router) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("email")
  }

  logout(){
    this.r.navigate(["/admin"])
    localStorage.clear()
  }
}
