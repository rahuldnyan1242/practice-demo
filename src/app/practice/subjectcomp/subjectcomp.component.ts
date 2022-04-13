import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/services/design-utilities.service';

@Component({
  selector: 'app-subjectcomp',
  templateUrl: './subjectcomp.component.html',
  styleUrls: ['./subjectcomp.component.scss']
})
export class SubjectcompComponent implements OnInit {

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
