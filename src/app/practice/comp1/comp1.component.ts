import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/services/design-utilities.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  userName:any;

  constructor(private _unameService: DesignUtilitiesService) {
    this._unameService.userName.subscribe(uname => {
      this.userName = uname
    })
   }

  ngOnInit(): void {
  }

  updateUserName(uname) {
    this._unameService.userName.next(uname.value)
  }

}
