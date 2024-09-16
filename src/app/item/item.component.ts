import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() oneCandidat: Candidat  ;
 @Output() msgToList = new EventEmitter ;

 sendToList(){
  this.msgToList.emit(this.oneCandidat)
}
}
