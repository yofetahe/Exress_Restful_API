import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  updateTask: any;
  updateTaskData: any;

  @Input() taskInfo: any;

  constructor(public _httpService: HttpService) {    
    this.getTaskUpdateForm(this.taskInfo);
  }

  ngOnInit() {
    // this.taskInfo = { id: "", title: "", description: "" };
  }

  getTaskUpdateForm(id: string){
      this.updateTask = this.taskInfo    
  }

  updateTaskInfo(){   
    alert(this.taskInfo.id);
    this._httpService.updateTask(this.taskInfo.id, this.taskInfo)
      .subscribe(data => {
        this.updateTaskData = [];
      })
  }
}
