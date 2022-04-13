import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = 'Enter Name in text box';
  compoExist: boolean = true;
  infoBtnLabel: string = 'Show Info';
  hideInfo: boolean = true;
  changeName(val) {
    this.name = val.value;
  }

  destroyComponent() {
    this.compoExist = false;
  }

  toggleInfo() {
    let container = document.querySelector('.container');

     if(this.hideInfo){
      this.infoBtnLabel = 'Hide Info';
      this.hideInfo = false;
     } else {
      this.infoBtnLabel = 'Show Info';
      this.hideInfo = true;
     }
  }
}
