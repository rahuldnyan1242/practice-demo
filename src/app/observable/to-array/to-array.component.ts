import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  newSource = [
    {name: 'Rahul', skills: 'Angular'},
    {name: 'Shubham', skills: 'MainFrame'},
    {name: 'Ashish', skills: 'Buisness'},
    {name: 'Madhur', skills: 'Packaging'}
  ]
  result1 = []
  result2 = []
  result3 = []
  constructor() { }

  ngOnInit(): void {
    //Ex - 01
    const source1 = interval(1000);

    source1.pipe(take(5), toArray())
    .subscribe(res => {
      this.result1 = res;
      //console.log(this.result);
    });

    //Ex - 02
    const source2 = from(this.newSource)

    source2.pipe(toArray()).subscribe(res => {
      this.result2 = res;
      // console.log(res);
    })
    //Ex - 03
    const source3 = of('Rahul', 'Shubam', 'Ashish')

    source3.pipe(toArray()).subscribe(res => {
      this.result3 = res;
      console.log(res);
    })
    
  }

}
