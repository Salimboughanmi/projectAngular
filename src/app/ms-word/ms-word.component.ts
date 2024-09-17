import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent {
 bg ;
 col;
 siz;
font;

changesize(inp){
  this.siz =`${inp}px`
}
}
