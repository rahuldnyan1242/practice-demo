import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.scss']
})
export class TemplatedrivenformsComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  defaultValue="Select Course"
  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    'Angular',
    'NodeJS',
    'TypeScript',
    'Javascript',
    'HTML5/CSS3'
  ]

  genders = [
    {id: 1,  value: 'Male'},
    {id: 2,  value: 'Female'}
  ]

  onSubmit(form: NgForm) {
    // console.log(form.form.value);
    console.log(this.myForm.form);
  }

}
