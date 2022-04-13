import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AddElementUtilityService } from 'src/app/services/add-element-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private addel: AddElementUtilityService) { }

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let targetVal = 'Video ' + count++;
      this.addel.printElement('elcontainer1', targetVal);
    })
  }

}
