import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AddElementUtilityService } from 'src/app/services/add-element-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  subs: Subscription;
  count: number = 0;

  constructor(private addEle: AddElementUtilityService) { }

  ngOnInit(): void {
    const Arr = ['Joshudi','Rahul', 'Pooja', 'Shubham', 'Ashish', 'Kunal', 'Vaishnu', 'Bhadu'];
    const source = interval(1500);

    this.subs = source.pipe(
      tap(res => {
        if(res === Arr.length){
          this.subs.unsubscribe();
        }
      }),
      map(data => Arr[data])
    )
    .subscribe(res => {
      console.log(res);
      // this.count += 1;

      this.addEle.printElement('elContainer', res);
      // console.log("Count : " + this.count);
      // if(Arr.length == this.count) {
      //   // console.log("Break Count : "+this.count);
      //   this.subs.unsubscribe();
      // }
    });
  }

}
