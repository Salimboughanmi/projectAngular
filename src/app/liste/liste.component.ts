import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() listeCandidat : Candidat[]

  @Output() msgToCv = new EventEmitter ;

  traitementduList(cand){
    this.msgToCv.emit(cand)
  }
}
