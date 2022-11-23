import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
public api="http://ilandertech.com/api/index.php/Welcome/"

  constructor(public http:HttpClient) { }

  addSlider(data:any){
    return this.http.post(this.api+"AddStuSliders",data)
  }
  getSlider(){
    return this.http.get(this.api+"GetStuSlider")
  }
  delt(data:any){
    return this.http.post(this.api+"DeleteStuSlider",data)
  }
  updateslider(data:any){
    return this.http.post(this.api+"updateStuSlider",data)
  }
  
  getActive(){
    return this.http.get(this.api+"GetStuSliderActive")
  }
  addCourse(data:any){
    return this.http.post(this.api+"AddStuDesc",data)
  }
  getCourse(){
    return this.http.get(this.api+"GetStuDesc")
  }
  deltCourse(data:any){
    return this.http.post(this.api+"DeleteStuDesc",data)
  }
  updateCourse(data:any){
    return this.http.post(this.api+"updateStuDesc",data)
  }
  
}
