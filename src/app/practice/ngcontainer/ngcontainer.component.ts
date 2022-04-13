import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.scss']
})
export class NgcontainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  statusOnline: boolean = true;

  names = [
    {name: 'Rahul'},
    {name: 'Shubham'},
    {name: 'Ashish'},
    {name: 'Kunal'},
  ]

}
