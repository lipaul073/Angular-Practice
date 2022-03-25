import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interface/Task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!:Task;
  @Output() deleteTaskEmit = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  deleteBtnClick(){
    this.deleteTaskEmit.emit()
  }
}
