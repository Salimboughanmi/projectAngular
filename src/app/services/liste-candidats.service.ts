import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root'
})
export class ListeCandidatsService {
 private listCandidats :Candidat[]=[
    new Candidat(1 , 'salim' , "bough" , 30 , "enseignant" , "marge.jpeg") ,
    new Candidat(2 , 'homer' , "simpsom" , 50 , "doctor" , "bart.jpeg") ,
    new Candidat(3 , 'salim' , "bough" , 30 , "enseignant" , "homer.jpg"),
    new Candidat(4 , 'salim' , "bough" , 30 , "enseignant" , "marge.jpeg"),]


  constructor() { }

  getAllCandidats(){
   return this.listCandidats
  }
  addCandidat(){
    this.listCandidats.push(new Candidat(1 , 'new candidat' , "el bough" , 30 , "ingee" , "marge.jpeg") ,)
  }
}
