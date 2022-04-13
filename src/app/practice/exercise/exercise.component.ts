import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exerciseLink="https://stackblitz.com/edit/angular-ivy-4p4nbm?file=src%2Fapp%2Fcount.service.ts";

}
