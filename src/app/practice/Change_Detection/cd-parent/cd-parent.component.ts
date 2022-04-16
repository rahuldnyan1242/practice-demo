import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from '../cd-child/cd-child.component';

@Component({
  selector: 'app-cd-parent',
  templateUrl: './cd-parent.component.html',
  styleUrls: ['./cd-parent.component.scss']
})
export class CdParentComponent implements OnInit {

  public employee: Employee = {
    name: 'Rahul',
    age: 30
  }
  public myData = 'myData';
  constructor() { }

  ngOnInit(): void {
  }

  reaasign(){
    this.myData = this.employee.name;
    this.employee = {
      name: this.employee.name,
      age: this.employee.age
    }
  }

}
