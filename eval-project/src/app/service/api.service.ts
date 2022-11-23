import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://ilandertech.com/api/index.php/Welcome/"

  constructor(public api:HttpClient) { }

register(data:any){
return this.api.post(this.url+"AddStuRegister",data)
}

login(data:any){
 return  this.api.post(this.url+"StuLogin",data)
}
getuser(){
  return this.api.get(this.url+"getStuUsers")
}
deluser(data:any){
  return this.api.post(this.url+"DeleteStuUsers",data)
}






}
