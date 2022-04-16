import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-child',
  templateUrl: './cd-child.component.html',
  styleUrls: ['./cd-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdChildComponent implements OnInit {

  @Input() employee: Employee;
  @Input() myData;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Employee {
  name: string;
  age: number;
}
