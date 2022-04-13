import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/services/design-utilities.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  constructor(private _unameService: DesignUtilitiesService) {
    this._unameService.userName.subscribe(uname => {
      this.userName = uname
    })
   }

  ngOnInit(): void {
  }
  userName:any;

  updateUserName(uname) {
    this._unameService.userName.next(uname.value)
  }


}
