import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  bg ="green"
  traitementDuParent(msg){
    alert(msg)
  }

}
