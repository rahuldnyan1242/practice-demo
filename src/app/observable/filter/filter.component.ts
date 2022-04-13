import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  data;
  data2;
  data3;
  dataArray = [
    {id: 1, name: 'Rahul', gender: 'Male'},
    {id: 2, name: 'Madhur', gender: 'Female'},
    {id: 3, name: 'Shubham', gender: 'Male'},
    {id: 4, name: 'Vaishnavi', gender: 'Female'},
    {id: 5, name: 'Ashish', gender: 'Male'},
    {id: 6, name: 'Kunal', gender: 'Male'},
    {id: 7, name: 'Aishwariya', gender: 'Female'},
    {id: 8, name: 'Pooja', gender: 'Female'},
    {id: 9, name: 'Prashant', gender: 'Male'},
    {id: 10, name: 'Jyotsna', gender: 'Female'},
    {id: 11, name: 'Pradeep', gender: 'Male'},
    {id: 12, name: 'Chiranjeevi', gender: 'Male'},
  ];
  constructor() { }

  ngOnInit(): void {

    const source = from(this.dataArray);

    //Ex - 01
    source.pipe(
      filter(data => data.name.length > 6),
      toArray()
    ).subscribe(res => {
      this.data = res;
    });

    //Ex - 02
    source.pipe(
      filter(data => data.gender == 'Female'),
      toArray()
    ).subscribe(res => {
      this.data2 = res;
    });

    //Ex - 03
    source.pipe(
      filter(data => data.id <= 5),
      toArray()
    ).subscribe(res => {
      this.data3 = res;
    });
  }

}
