import { Component, OnInit } from '@angular/core';
import { BuylinksService } from 'src/app/services/buylinks.service';
import { SharetemplatesService } from 'src/app/services/sharetemplates.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  producturl: string;
  productlabel: string;
  productImage: string;
  
  constructor(
    private buylinks: BuylinksService,
    private data: SharetemplatesService
  ) {}

  ngOnInit(): void {
    // console.log("URL :: ",this.buy.devices); 
    // this.buylaptopurl = this.buy.laptop;

    this.productlabel = this.data.productInfo.productType;
    this.producturl = this.data.productInfo.producturl;
    for(let i in this.buylinks.backgroundImages){
      if(i === this.productlabel){
        this.productImage = this.buylinks.backgroundImages[i];
      }
    }

    // console.log("After Click :: ", this.data.productInfo)
  }
}
