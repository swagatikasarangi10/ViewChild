import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() parentData: string; //parent to child
  @Output() public sendData = new EventEmitter<string>(); //child to parent
  constructor() {}

  ngOnInit(): void {
    this.sendData.emit('child data from child component');
  }
}
