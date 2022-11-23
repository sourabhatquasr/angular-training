import { Component, OnInit } from '@angular/core';
import { HttpService } from '../dashboard/apis/http.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topics:any;
  filepath:any;
  constructor(public api:HttpService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.api.getCourse().subscribe((out:any)=>{
      console.log(out)
      this.topics=out.data;
     this.filepath=out.filepath;
     this.topics.sort((a:any,b:any) => {return b.d_id-a.d_id});
    })
  }
}
