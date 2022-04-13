import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { AddElementUtilityService } from 'src/app/services/add-element-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  obsIntervalSubscription: Subscription;
  constructor(private addel: AddElementUtilityService) { }

  ngOnInit(): void {

    //let observabeInterval = interval(1000);
    let observabeInterval = timer(5000, 500)

    this.obsIntervalSubscription = observabeInterval.subscribe(res => {
      let targetVal  = 'video ' + res
      this.addel.printElement('elcontainer', targetVal);
      if(res >= 5){
        this.obsIntervalSubscription.unsubscribe()
      }
    })
  }

}
