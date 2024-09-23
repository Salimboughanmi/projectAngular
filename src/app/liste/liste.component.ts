import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
 providers : [ListeCandidatsService]           // pour injecter un service dans un composant
})
export class ListeComponent {
  //@Input() listeCandidat : Candidat[]
  listeCandidat :any[]
  @Output() msgToCv = new EventEmitter ;

constructor(private listcandservice : ListeCandidatsService){
  this.listeCandidat = this.listcandservice.getAllCandidats();
}

//add getallcandidat

  traitementduList(cand){
    this.msgToCv.emit(cand)
  }

}
