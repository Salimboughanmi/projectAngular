import { Component, Input } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { ListeRecruesService } from '../services/liste-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
@Input() CandidatSelected : Candidat

constructor( private candRecrues : ListeRecruesService){
}
addNewRecrue(){
  this.candRecrues.addRecrue(this.CandidatSelected)

}
}
