// import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
// import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  currCategory: string | undefined;

  constructor(private productService: ProductService) {}

  // Lifecycle Hooks
  ngOnInit(): void {}

  ngOnDestroy(): void {}

  // DOM Actions
  selectProduct(product: Product): void {}

  changeCat(e: any) {
    this.currCategory = e;

    if (this.currCategory == 'all') {
      this.productService.getProducts('all').subscribe((res) => {
        this.products = res;
      });
    } else {
      console.log('NEW CATEGORY');
      this.productService.getProducts(this.currCategory!).subscribe((res) => {
        this.products = res.filter((p) => p.category === this.currCategory);
      });
    }
  }
}
