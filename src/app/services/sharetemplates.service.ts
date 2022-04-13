import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharetemplatesService {
  producturl: string = '';
  productType: string = '';

  productInfo = {
    producturl: '',
    productType: ''
  }

  constructor() { }

  public setBuyURL(index, value){
    this.productInfo.productType = index;
    this.productInfo.producturl = value;
    // console.log("setBuyURL :: ", this.productInfo);
  }

  public getBuyURL() {
    // console.log("Shared URL:: ", this.productInfo);
    return this.productInfo;
  }
}
