import { ProductComponent } from './../Component/product/product.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {
   public cartItemList :any=[]
   public productList =  new BehaviorSubject<any>([]);
   public search = new BehaviorSubject<string>("");
   
  constructor() { }

  getProducts(){
       return this.productList.asObservable();
  }
       setProduct(product: any){
         this.cartItemList.push(...product);
         this.productList.next(product);      
      
  }
   addtoCart (product:any){
     this.cartItemList.push(product);
     this.productList.next(this.cartItemList);
     this.getTotalPrice();
     console.log(this.cartItemList)

   }
   getTotalPrice():number{
     let grandtotal = 0;
     this.cartItemList.map((a:any)=>{
        grandtotal += a.total;
     });
     return grandtotal;

   }

   removeCartItemList(product:any){
         this.cartItemList.map((a:any,index:any)=>{
         if(product.id == a.id){
            this.cartItemList.splice(index,1);
         }
         })
         this.productList.next(this.cartItemList);
   }
   removeall(){
     this.cartItemList=[];
     this.productList.next(this.cartItemList);
   }
    
  
}
