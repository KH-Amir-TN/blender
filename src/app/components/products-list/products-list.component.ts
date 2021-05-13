import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/http-services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products = null ;

  constructor(private httpProducts : ProductsService) { }

  ngOnInit(): void {
    this.getProducts(0);
  }

  getProducts(pageNum : Number){
    this.httpProducts.getProducts(pageNum).subscribe(
      products => {
        this.products = products ;
        
      }
    )
  }



}
