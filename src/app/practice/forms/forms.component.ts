import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  hideForms: boolean = true;
  hideTDForm: boolean = true;
  hideReactForm: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleTDForms() {
    this.hideForms = true;
    this.hideTDForm = true;
    this.hideReactForm = false;
  }

  toggleReactForms() {
    this.hideForms = true;
    this.hideReactForm = true;
    this.hideTDForm = false;
  }

}

