import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productSelected: boolean;
  @Input() selectedproduct: string = '';
  @Output() addProduct = new EventEmitter();
  @Input() showcartFlag:boolean;

  addProducts(){
    this.showcartFlag = true;
    this.addProduct.emit(this.selectedproduct);
  }
}
