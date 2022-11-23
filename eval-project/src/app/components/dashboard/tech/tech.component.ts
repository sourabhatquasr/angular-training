import { Component, OnInit } from '@angular/core';
import { HttpService } from '../apis/http.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

   //Upload
   slider={img:"",name:"",desc:""}

   files:any;
   msg:any;
   clr={red:false,green:false}

   uploadImg(e:any){
     console.log(e)
     this.files=e.target.files[0];
     this.msg="";
   }
 
 
 //get
 data:any;
 filepath:any;
 //delt
 msg1:any
 
 //open Model
 
 sliderUpdate={img:"",uid:"",img1:"",name:"",desc:""};//for update,img1 is disply img in modal
 msgU:any;
 //upload
 
 
   constructor(public api:HttpService) { }
 
   ngOnInit(): void {
     this.getSlider()
   }
 
   //Add Course
   upload=()=>{
    console.log(this.slider.img) 
    const data=new FormData();

    data.append("d_name",this.slider.name);
    data.append("d_img",this.files);
    data.append("d_desc",this.slider.desc);


    this.api.addCourse(data).subscribe((res:any)=>{
     console.log(res)
     this.msg=res.message
     if(res.status==1){
       this.clr={red:false,green:true}
       this.getSlider();
     }
     else{
       this.clr={red:true,green:false}
     }
    })
 
   }
 //Get Course
  getSlider=()=>{
   this.api.getCourse().subscribe((out:any)=>{
     console.log(out)
     this.data=out.data;
    this.filepath=out.filepath;
      //serial key generate 
     let i=0;//declare one variable and assign value;
     let arr:any=[];//take one empty array to store data
     this.data.sort((a:any,b:any) => {return b.d_id-a.d_id});
     this.data.forEach((element:any)=>{
       i++;
       element['id']=i;//to add id elemnt in data, how many data we have ,the number of times data(ID) disply
       arr.push(element);//add ID value in data
       console.log(arr);
     });
     this.data=arr;

   })
 }
 
 //delet
 del=(x:any)=>{
 
   if(confirm("Are You Sure to delte")){
     console.log(x);
     //console.log(id);
     const data=new FormData;
     data.append("d_id",x)
 
     this.api.deltCourse(data).subscribe((out:any)=>{
       this.msg1=out.message;
       if(out.status==1){
         this.clr={red:false,green:true}
         this.getSlider();
       }
       else{
         this.clr={red:true,green:false}
       }
     })
 
   }
 
 }
 
 //edit
 edt=(x:any)=>{
 this.msgU=""
 this.sliderUpdate.img="";
 
const d1=this.data.filter((y:any)=>y.d_id===x);
 console.log(d1);
 
 this.sliderUpdate.img1=d1[0].d_img;//here only store img in img1 ,img is only show
 this.sliderUpdate.uid=d1[0].d_id;
 this.sliderUpdate.name=d1[0].d_name;
 this.sliderUpdate.desc=d1[0].d_desc;
 }
 
 
 
 //upload
 updateslider=()=>{
   const data=new FormData();
   data.append("d_id",this.sliderUpdate.uid);
   data.append("d_img",this.files);
   data.append("d_name",this.sliderUpdate.name);
   data.append("d_desc",this.sliderUpdate.desc);

   this.api.updateCourse(data).subscribe((out:any)=>{
     console.log(out);
     this.msgU=out.message;
           if(out.status==1){
             this.getSlider();//add sliders ,and display in tables early;
             this.clr={green:true,red:false};
           }
           else{
             this.clr={green:false,red:true};
           }
   
       });
 
 }
 
 

}
