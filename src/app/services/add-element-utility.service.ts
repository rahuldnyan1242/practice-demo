import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddElementUtilityService {

  constructor() { }

  printElement(targetElement, targetValue){
    let el = document.createElement('li');
    el.innerText = targetValue;

    document.getElementById(targetElement).append(el);
  }
}
