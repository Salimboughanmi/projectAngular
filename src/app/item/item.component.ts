import { Component, Input } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() oneCandidat: Candidat  ;
}
