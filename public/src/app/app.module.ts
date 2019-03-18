import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, 
        MatCardModule, 
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/task-create/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskUpdateComponent } from './tasks/task-update/task-update.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    TasksListComponent,
    TaskDetailComponent,
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
