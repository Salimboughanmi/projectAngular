import { Component, Output } from '@angular/core';
import { Candidat } from '../Models/candidat';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
 listCandidats :Candidat[]=[
new Candidat(1 , 'salim' , "bough" , 30 , "enseignant" , "marge.jpeg") ,
new Candidat(2 , 'homer' , "simpsom" , 50 , "doctor" , "bart.jpeg") ,
new Candidat(3 , 'salim' , "bough" , 30 , "enseignant" , "homer.jpg"),
new Candidat(4 , 'salim' , "bough" , 30 , "enseignant" , "marge.jpeg"),]

//slectedCandidat :[]
slectedCandidat : Candidat

traitementCv(candu){
   this.slectedCandidat = candu ;
   console.log(this.slectedCandidat)
}
}
