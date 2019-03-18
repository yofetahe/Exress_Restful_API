import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  newTask: any;
  @Output() taskAdded = new EventEmitter();

  constructor(private _httpService: HttpService){   
  }

  ngOnInit(){    
    this.newTask = { title: "", description: "" };
  }

  addTask(){
    this._httpService.addTask(this.newTask)
      .subscribe(data => {
        console.log("successful");
        this.newTask = { title: "", description: "" };
        this.taskAdded.emit(this.newTask);
      })
  }

}
