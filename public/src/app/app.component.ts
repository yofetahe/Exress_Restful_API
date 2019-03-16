import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageTitle: string;
  taskTitle: string;

  newTask: any;
  updateTask: any;

  tasks: any = [];
  task: any = [];
  updateTaskData: any = [];

  constructor(private _httpService: HttpService){   
  }

  ngOnInit(){
    this.pageTitle = 'Restful Tasks API';
    this.taskTitle = 'Task Detail Info';
    this.newTask = { title: "", description: "" };
    this.updateTask = { id: "", title: "", description: "" };
  }

  getAllTasks(event: any){
    this._httpService.getAllTasks()
      .subscribe(data => {
        this.tasks = data;
        console.log(data);
      });
  }

  getTaskDetail(id: string){    
    this._httpService.getTaskById(id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      });
  }

  addTask(){
    this._httpService.addTask(this.newTask)
      .subscribe(data => {
        console.log("successful");
        this.newTask = { title: "", description: "" };
      })
  }

  getTaskUpdateForm(id: string){
    this._httpService.getTaskById(id)
      .subscribe(data => {
        console.log(data)
        this.updateTaskData = data;
        this.updateTask = {
          id: this.updateTaskData[0]['_id'],
          title: this.updateTaskData[0]['title'], 
          description: this.updateTaskData[0]['description'] 
        };
      });
  }

  updateTaskInfo(){
    this._httpService.updateTask(this.updateTask.id, this.updateTask)
      .subscribe(data => {
        this.updateTaskData = [];
      })
  }
  deleteTask(id: string){
    this._httpService.deleteTask(id)
      .subscribe(data => {
        console.log("successfully deleted");
      })
  }
}
