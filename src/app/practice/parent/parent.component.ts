import { Component, OnInit } from '@angular/core';
import { BuylinksService } from 'src/app/services/buylinks.service';
import { SharetemplatesService } from 'src/app/services/sharetemplates.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(
    private buylinksService: BuylinksService,
    private sharetemplatesService: SharetemplatesService
  ) { }

  ngOnInit(): void {
  }

  productSelected: boolean = false;
  selectedproduct: string;
  cartProduct: string;
  showcartFlag: boolean = false;

  knowmore(value: string){
    this.productSelected = true;
    this.selectedproduct = value;
  }

  addProduct(event) {
    this.showcartFlag = true;
    this.cartProduct = event;
  }

}
