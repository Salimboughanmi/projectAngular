import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  bg = "yellow" ;
  cl = 'red'

  class1 = true ;
  class2 = false;
  class3 = false;

  switchClass(){
    if (this.class1) {
this.class1 =false
this.class2 =true

    }
    else if(this.class2){
      this.class2 =false
      this.class3 =true

    }else{
      this.class3 = false
      this.class1 =true
    }
  }
}


