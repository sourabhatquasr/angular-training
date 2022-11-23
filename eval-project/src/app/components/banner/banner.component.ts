import { Component, OnInit } from '@angular/core';
import { HttpService } from '../dashboard/apis/http.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public imgs=[
    {img:"assets/images/1.png",alt:"img1"},
    {img:"assets/images/2.jpg",alt:"img2"},
    {img:"assets/images/3.jpeg",alt:"img3"},
    {img:"assets/images/4.png",alt:"img4"},
    {img:"assets/images/5.png",alt:"img5"},
    
   ]
  constructor(public api:HttpService) { }

//Active Sliders Data
res:any;
filepath:any;

  ngOnInit(): void {
  this.getActive();
  }

  getActive(){
    this.api.getActive().subscribe((img:any)=>{
      console.log(img);
      this.res=img.data;
        this.filepath=img.filepath;
        this.res.sort((a:any,b:any) => {return b.slider_id-a.slider_id});
    })
  }

}
