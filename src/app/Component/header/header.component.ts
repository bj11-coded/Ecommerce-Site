import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
   public totalItem :number = 0;
   public searchTeam : string='';

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      this.totalItem =  res.length;
    })

  }
  search(event:any){
    this.searchTeam =(event.target as HTMLInputElement).value;
    console.log(this.searchTeam);
    this.cartService.search.next(this.searchTeam);
  }

}
