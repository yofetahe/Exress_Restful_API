import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){    
    this.getAllTasks();
    this.getTaskById("5c89670c5f765d3e300a7b28");
    this.deleteTask("5c897e0223b72922c04d7d06");
  }

  getAllTasks(){

    let tempObservable = this._http.get('/api/tasks');

    tempObservable.subscribe(data => console.log("Got our tasks", data));
  }

  getTaskById(id: string){
    
    let tempObservable = this._http.get(`/api/tasks/${id}`);

    tempObservable.subscribe(data => console.log("Got a task", data));
  }

  // addTask(){

  // }

  // updateTask(id: any){

  // }

  deleteTask(id: string){

    let tempObservable = this._http.delete(`/api/tasks/${id}`);

    tempObservable.subscribe(data => console.log("Delete tasks", data));
  }
}
