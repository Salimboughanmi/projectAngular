import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() bgsecond ="blue"
  @Output() msgToFirst = new EventEmitter();

sendmsg(){
  this.msgToFirst.emit("message de la part de l'enfent ")
}
}
