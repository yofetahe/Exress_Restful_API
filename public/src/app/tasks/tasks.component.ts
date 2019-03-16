import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  title: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.title = "The list of tasks"
  }

}
