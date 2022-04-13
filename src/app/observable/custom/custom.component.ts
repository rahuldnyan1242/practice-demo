import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { AddElementUtilityService } from 'src/app/services/add-element-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  
  techStatus;
  techStatus1;
  names;
  nameStatus;
  custObs2Subscription: Subscription;
  custObs3Subscription: Subscription;
  constructor( private addEle :  AddElementUtilityService) { }
  ngOnInit(): void {
    
    //Ex - 01 (Manual)
    const custObs1 = Observable.create(observer => {

      setTimeout(() =>{
        observer.next('Angular')
      }, 1000)
      setTimeout(() =>{
        observer.next('Typescript')
      }, 2000)
      setTimeout(() =>{
        observer.next('HTML & CSS');
        observer.complete();
      }, 3000)
      setTimeout(() =>{
        observer.next('Javascript');        
      }, 4000)
      setTimeout(() =>{
        observer.next('jQuery')        
      }, 5000)
     
    });

    custObs1.subscribe(res =>{
      // console.log(res);
      this.addEle.printElement('elContainer', res);
    },
    (err) => {
      this.techStatus = 'error';
    },
    () => {
      this.techStatus = 'completed';
    })

    //Ex - 02 (Custom Interval Observable)
    const obsArr = ['Angular', 'Typescript', 'HTML', 'CSS', 'Javascript', 'jQuery'];
    const custObs2 = Observable.create(observ => {
      let count = 0;
      setInterval(() =>{
          observ.next(obsArr[count])
          if(count >= 2){
            //observ.error('Emmit');   
            observ.complete();
          }
          if(count >= 5){
            this.custObs2Subscription.unsubscribe()
          }
          count++;
      }, 1000)
    })

    this.custObs2Subscription = custObs2.subscribe(res => {
      this.addEle.printElement('elContainer2', res);
    },(err) => {
      this.techStatus1 = 'error';
    },
    () => {
      this.techStatus1 = 'completed';
    });
    
    //Ex - 03 (Random Names)
    const obsArr2 = ['Rahul', 'Shubham', 'Ashish', 'Kunal', 'Rythm', 'Reetika', 'Govinda'];
    const custObs3 = Observable.create(observ => {
      let count = 0;
      setInterval(() =>{
          observ.next(obsArr2[count])
          // if(count >= 3){
          //   observ.error('Emmit');   
          // }
          if(count >= 6){
            observ.complete();
            this.custObs3Subscription.unsubscribe()
          }
          count++;
      }, 1000)
    })

    this.custObs3Subscription = custObs3.subscribe(res => {
      console.log(res);
      this.names = res;
    },
    (err) => {
      this.nameStatus = 'error';
    },
    () => {
      this.nameStatus = 'completed';
    })


  }
  
  ngOnDestroy(): void {
    this.custObs2Subscription.unsubscribe();
    this.custObs3Subscription.unsubscribe();
  }
}
