import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../interface/Task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl: string="http://localhost:3200/tasks"

  constructor(private Http:HttpClient) { }

  getTask():Observable<Task[]>{
    return this.Http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const url:string=`${this.apiUrl}/${task.id}`
    return this.Http.delete<Task>(url);
  }
}
