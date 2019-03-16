import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){    
    
  }

  getAllTasks(){

    return this._http.get('/api/tasks');
  }

  getTaskById(id: string){

    return this._http.get(`/api/tasks/${id}`);
  }

  addTask(newTask){
    return this._http.post('/api/tasks', newTask);
  }

  updateTask(id, updateTask){
    return this._http.put(`/api/tasks/${id}`, updateTask);
  }

  deleteTask(id: string){
    return this._http.delete(`/api/tasks/${id}`);
  }
}
