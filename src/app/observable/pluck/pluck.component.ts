import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }
  usrNames;
  data2;
  users = [
    { name: 'Rahul', 
      skills: 'Angular',
      job: {
        title: 'Frontend Develoeper',
        exp: 5
      }
    },
    { name: 'Shubham', 
      skills: 'Mainframe',
      job: {
        title: 'AWS Develoeper',
        exp: 5
      }
    },
    { name: 'Ashish', 
      skills: 'Buisness',
      job: {
        title: 'Owner',
        exp: 5
      }
    },
    { name: 'Kunal', 
      skills: 'Architech',
      job: {
        title: 'Design Develoeper',
        exp: 5
      }
    },
  ];

  ngOnInit(): void {
    //Ex - 01
    from(this.users).pipe(
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.usrNames = res;
    });

    //Ex - 02
    from(this.users).pipe(
      pluck('job','title'),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data2 = res;
    });
  }

}
