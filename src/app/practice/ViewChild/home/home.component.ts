import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component1Component } from '../component1/component1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = 'Rahul';
  @ViewChild('box') box: ElementRef;
  @ViewChild(Component1Component) child: Component1Component;

  constructor() { }

  ngOnInit(): void {

  }
  changeChildProperty() {
    this.child.userName = 'Shubham';
  }
  callChildMethod() {
    this.child.showAlert();
  }

}
