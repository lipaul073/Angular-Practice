import { Task } from 'src/app/interface/Task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() addNewTask = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert("請輸入任務內容")
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.addNewTask.emit(newTask);
    
    this.text = ''
    this.day = ''
    this.reminder = false

  }
}
