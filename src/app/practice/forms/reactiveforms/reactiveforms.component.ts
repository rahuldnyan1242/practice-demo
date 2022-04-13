import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  myReactiveForm: FormGroup;
  defaultValue="Select Course"
  notAllowedNames = ['Rupali', 'Dheeraj']
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
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.invalidNames.bind(this)]),
        'email': new FormControl(null, Validators.email, this.invalidEmail),
      }),
      'course': new FormControl(this.defaultValue),
      'gender': new FormControl(null),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })

    console.log("Form value::",this.myReactiveForm.get('skills'))
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
  }

  onAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  onReset() {
    this.myReactiveForm.reset();
  }

  invalidNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'errUsrName': true};
    }
    return null;
  }

  invalidEmail(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setInterval(() =>{
        if(control.value === 'rahul@gmail.com'){
          resolve({'errEmail': true});
        }else {
          resolve(null)
        }
      }, 3000);
      
    })
    return myResponse;
  }

}
