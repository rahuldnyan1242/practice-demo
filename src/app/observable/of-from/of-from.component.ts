import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { AddElementUtilityService } from 'src/app/services/add-element-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsFrom;
  constructor(private addItem: AddElementUtilityService) { }

  ngOnInit(): void {
    const obs1 = of('Rahul', 'Shubham', 'Ashish')

    obs1.subscribe(res => {
      this.addItem.printElement('elcontainer', res)
    })

    const obs2 = of({a: 'Rahul', b: 'Dnyaneshwar', c: 'Shiwarkar'})

    obs2.subscribe(res => {
      this.obsFrom = res;
      // this.addItem.printElement('elcontainer', res)
    })


    //From - Array
    const obsArr = from (['Rahul', 'Shubham', 'Ashish'])

    obsArr.subscribe(res => {
      //this.obsFrom = res;
      console.log("obsFrom : " + res);
      this.addItem.printElement('elcontainerfromArr', res)
    })

    //From - Promise
    const obsPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved.");
      }, 5000)
    })

    const obsPromiseFrom = from (obsPromise)
    obsPromiseFrom.subscribe(res => {
      //this.obsFrom = res;
      // console.log("obsPromise : " + res);
      this.addItem.printElement('elcontainerPromise', res)
    })

    //From - String
    const obsStringFrom = from ("Rahul")
    obsStringFrom.subscribe(res => {
      //this.obsFrom = res;
      console.log("obsStringFrom : " + res);
      this.addItem.printElement('elcontainerString', res)
    })

    
  }

}
