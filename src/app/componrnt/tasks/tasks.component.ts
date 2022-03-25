import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/interface/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[];
  constructor(private TaskService:TaskService) { }

  ngOnInit(): void {
    this.TaskService.getTask().subscribe((t)=>this.tasks=t);
  }
  deleteTask(item:Task){
    this.TaskService.deleteTask(item).subscribe(()=>this.tasks = this.tasks.filter((t)=>t.id !== item.id));
  }
  toggleTask(item:Task){
    item.reminder = !item.reminder;
    this.TaskService.toggleTask(item).subscribe();
  }
}
