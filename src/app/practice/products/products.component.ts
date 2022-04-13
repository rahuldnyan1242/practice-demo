import { Component, OnInit } from '@angular/core';
import { BuylinksService } from 'src/app/services/buylinks.service';
import { SharetemplatesService } from 'src/app/services/sharetemplates.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  constructor(
    private buylinksService: BuylinksService,
    private sharetemplatesService: SharetemplatesService
  ) { }

  ngOnInit(): void {
  }

  knowmore(value: string){
    for(let i in this.buylinksService.devices){
      if(i === value){
        this.sharetemplatesService.setBuyURL(i, this.buylinksService.devices[i]);
      }
    }
  }

}
