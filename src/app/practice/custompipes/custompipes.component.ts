import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.scss']
})
export class CustompipesComponent implements OnInit {

  /** Custome Pipes **/
  value: string = "This is pipes example";
  date = new Date();
  hideInfo: boolean = true;
  hideExample1: boolean = true;
  searchParam: string = "";
  infoBtnLabel: string = 'Show Info';
  exmpBtnLabel: string = 'Show Example';
  /* -------------------------------- */
  constructor() { }

  ngOnInit(): void {
  }
  /** Custome Pipes **/
  productDetails = [
    {name: 'HP Laptop', price: 45000, availability: true},
    {name: 'OnePlus Mobile', price: 35000, availability: false},
    {name: 'MI TV', price: 17000, availability: true},
    {name: 'BOSH Washing Machine', price: 27000, availability: true},
    {name: 'Sofa', price: 10000, availability: false},
    {name: 'Bed', price: 18000, availability: true},
    {name: 'Almirah', price: 8000, availability: true},
    {name: 'Dell Laptop', price: 30000, availability: true},
    {name: 'Sony TV', price: 30000, availability: true},
    {name: 'LG Washing Machine', price: 25000, availability: true},
    {name: 'Samsung', price: 15000, availability: true},
  ]


  toggleExmp() {
     if(this.hideExample1){
      this.infoBtnLabel = 'Hide Example';
      this.hideExample1 = false;
     } else {
      this.infoBtnLabel = 'Show Example';
      this.hideExample1 = true;
     }
  }
  toggleInfo() {
    if(this.hideInfo){
      this.infoBtnLabel = 'Hide Info';
      this.hideInfo = false;
     } else {
      this.infoBtnLabel = 'Show Info';
      this.hideInfo = true;
     }
  }
  /* -------------------------------- */

  /** Pure & Impure Pipes **/
  

  /* -------------------------------- */


}
