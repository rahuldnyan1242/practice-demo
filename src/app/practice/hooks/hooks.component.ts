import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() nameValue: string;
  counter;
  num: number = 1;

  constructor() {
    console.log('Constructor called.')
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called.')
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called.', changes)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called.')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called.')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called.')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called.')
    clearInterval(this.counter);
  }

}
