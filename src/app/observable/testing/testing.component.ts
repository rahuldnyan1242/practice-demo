import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { skip, take, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit, OnDestroy {

  testSbscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    const result = interval(1000);
    const temp1 = interval(5000);

    this.testSbscription = result.pipe(
      // take(10),
      // takeWhile(x => x <= 5),
      takeUntil(temp1),
      // skip(4)
    ).subscribe(res => {
      console.log("Interval : " + (res+1));
    });
  }

  ngOnDestroy(): void {
    this.testSbscription.unsubscribe();
  }

}
