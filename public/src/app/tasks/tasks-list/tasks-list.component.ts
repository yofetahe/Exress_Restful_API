import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: any = [];
  updateTaskData: any;
  pageTitle: string;

  selectedTask: string;
  addForm: boolean;
  updateForm: boolean;
  detailForm: boolean;

  constructor(public _httpService: HttpService) { 
    this.getAllTasks();
  }

  ngOnInit() {
    this.pageTitle = 'Restful Tasks API';
    this.addForm = false;
    this.updateForm = false;
    this.updateTaskData = { id: "", title: "", description: "" };   
  }

  getAllTasks(){
    this._httpService.getAllTasks()
      .subscribe(data => {
        this.tasks = data;
      });
  }

  getTaskAddForm(){
    this.addForm = true;
  }

  getTaskUpdateForm(id: any){    
    this._httpService.getTaskById(id)
      .subscribe(data => {        
        this.updateTaskData = {
          id: data[0]['_id'],
          title: data[0]['title'], 
          description: data[0]['description'] 
        };
        this.updateForm = true;
        this.detailForm = false;        
      });
  }
  
  getTaskDetail(id: any){
    this._httpService.getTaskById(id)
      .subscribe(data => {              
        this.updateTaskData = {
          id: data[0]['_id'],
          title: data[0]['title'], 
          description: data[0]['description'] 
        };
        this.detailForm = true;
        this.updateForm = false;
      });
  }

  deleteTask(id: string){
    this._httpService.deleteTask(id)
      .subscribe(data => {
        console.log("successfully deleted");
      })
  }
}
