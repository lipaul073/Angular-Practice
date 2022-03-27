import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleInput = new EventEmitter;
  title:string="todolist"
  constructor() { }

  ngOnInit(): void {
  }
  toggleTask(){
    this.toggleInput.emit();
  }
}
