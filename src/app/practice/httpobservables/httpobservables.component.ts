import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/services/design-utilities.service';

@Component({
  selector: 'app-httpobservables',
  templateUrl: './httpobservables.component.html',
  styleUrls: ['./httpobservables.component.scss']
})
export class HttpobservablesComponent implements OnInit {

  constructor(private getuser: DesignUtilitiesService) { }
  users=[];

  ngOnInit(): void {
    this.getuser.users().subscribe(data => {
      this.users = data;
    });
  }
  
}
