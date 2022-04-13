import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { AddElementUtilityService } from 'src/app/services/add-element-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  data;
  randomNames = ['JoshuDi','Rahul','Pooja','Shubham','Ashish','Kunal','Vaishnu','Bhadu'];
  constructor(private elAdd: AddElementUtilityService) { }

  ngOnInit(): void {

    const source = from(this.randomNames)
    const source2 = timer(5000);

    //Ex - 01 | Take
    source.pipe(
      take(5)
    ).subscribe(res => {
      //this.data = res;
      this.elAdd.printElement('elContainer1', res)
    })

    //Ex - 02 | TakeLast
    source.pipe(
      takeLast(5)
    ).subscribe(res => {
      //this.data = res;
      // console.log(res);
      this.elAdd.printElement('elContainer2', res)
    })

    //Ex - 03 | TakeUntil

    const sourceInterval = interval(1000);
    const conditions = fromEvent(document, 'click');

    sourceInterval.pipe(
      map(data => 'Number ' + data),
      takeUntil(conditions)
    ).subscribe(res => {
      //this.data = res;
      console.log(res);
      this.elAdd.printElement('elContainer3', res)
    })
  }

}
