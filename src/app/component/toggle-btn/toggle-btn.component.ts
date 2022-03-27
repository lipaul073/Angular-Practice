import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css']
})
export class ToggleBtnComponent implements OnInit {
  @Input() text!:string;
  @Input() color!:string;
  @Output() toggleClickEmit = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  toggleOnClick(){
    this.toggleClickEmit.emit();
  }
}
