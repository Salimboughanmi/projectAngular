import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }
showMessage(){
  console.log("je suis la first service")
}
}
