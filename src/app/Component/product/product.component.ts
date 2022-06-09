import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public productList:any;
//  public craftService:any;
      searchKey:string ="";
       
  constructor(private api:ApiService, private cartService: CartService) { }

  ngOnInit(): void {

    this.api.getProducts()
    .subscribe((res: any)=>{
      this.productList= res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,
          {quantity:1,total:a.price});
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey= val;
    })
  }
  addtocart(item:any){
    this.cartService.addtoCart(item); 
  }
}
