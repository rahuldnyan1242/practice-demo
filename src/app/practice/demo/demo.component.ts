import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  users = [];
  alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  alertTrigger = document.getElementById('liveAlertBtn');
  warningExist: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  createUser(val, warning) {
    if(val.value !== ''){
      this.users.push(val.value);
      val.value = "";
      warning.innerHTML = '';
      this.warningExist = false;
    } else {
      if(!this.warningExist){
        this.alertmsg('Please enter some name !!!', 'warning', warning);
      }
    }
  }

  alertmsg(message, type, container) {
    this.warningExist = true;
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    container.append(wrapper);
  }

  removeUser(item) {
    this.users.splice(item, 1);
  }

  removeAll() {
    this.users = [];
  }
}
