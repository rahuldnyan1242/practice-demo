import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  buyDell(){
    return false;
  }

  buyHp(){
    return true;
  }
  dell = {
    brand: 'Dell',
    hardsidk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    hardsidk: ' TB',
    color: 'Silver'
  }

  notAvailable = {
    brand: 'Not Available',
    status: 'Failed'
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve("This is resolved")
      if(this.buyDell()){
        return setTimeout(() =>{
          resolve(this.dell) 
        }, 3000);
      }else if(this.buyHp()){
        return setTimeout(() =>{
          resolve(this.hp) 
        }, 3000);
      }else {
        setTimeout(() =>{
          reject(this.notAvailable) 
        }, 3000);
      }
    });

    buyLaptop.then((res)=> {
      console.log('Then called => ', res);
    }).catch(res => {
      console.log('Catch called= =>', res);
    })
  }

}
