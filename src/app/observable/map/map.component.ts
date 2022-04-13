import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  subs1: Subscription;
  subs2: Subscription;

  msg1;
  msg2;
  msg3;
  constructor() { }
 

  ngOnInit(): void {
    const dataSource = interval(1000);

    //Ex - 01
    this.subs1 = dataSource.pipe(
      map(data => 'Video ' + data)
    ).subscribe(res => {
      // console.log(res);

      this.msg1 = res;
    });

    //Ex - 02
    this.subs2 = dataSource.pipe(
      map(data => data * 3)
    ).subscribe(res => {
      // console.log(res);

      this.msg2 = res;
    });

    setTimeout(() => {
      this.subs1.unsubscribe();
      this.subs2.unsubscribe();
    }, 10000);


    // EX - 03
    const members = from([
      {id: 1, name: 'Rahul', weapon: 'Sniper'},
      {id: 2, name: 'Shubham', weapon: 'Assault'},
      {id: 3, name: 'Ashish', weapon: 'SMG'},
      {id: 4, name: 'Kunal', weapon: 'Pistol'}
    ])

    members.pipe(
      map(data => data),
      toArray()
    )
    .subscribe(res => {
      this.msg3 = res;
    })

  }

}
