import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: any = [];
  @Input() taskInfo: string;

  constructor(public _httpService: HttpService) {
    this.getTaskDetail(this.taskInfo);
  }

  ngOnInit() {
  }
  
  getTaskDetail(id: string){    
    // this._httpService.getTaskById(id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.task = data;
    //   });
  }
}
