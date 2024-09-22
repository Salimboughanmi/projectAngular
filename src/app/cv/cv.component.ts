import { Component, Output } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { FirstServiceService } from '../services/first-service.service';
import { ListeCandidatsService } from '../services/liste-candidats.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
 listCandidats :Candidat[]=[
/* new Candidat(1 , 'salim' , "bough" , 30 , "enseignant" , "marge.jpeg") ,
new Candidat(2 , 'homer' , "simpsom" , 50 , "doctor" , "bart.jpeg") ,
new Candidat(3 , 'salim' , "bough" , 30 , "enseignant" , "homer.jpg"),
new Candidat(4 , 'salim' , "bough" , 30 , "enseignant" , "marge.jpeg"), */]


constructor(private firstSer : FirstServiceService , private listCand :ListeCandidatsService){  // ingecter la service de liste condidat service
  this.firstSer.showMessage();
  this.listCandidats = this.listCand.getAllCandidats()
}

/* ngOnInit():void {
  this.firstSer.showMessage();
} */

slectedCandidat : Candidat

traitementCv(candu){
   this.slectedCandidat = candu ;
   console.log(this.slectedCandidat)
}
}
