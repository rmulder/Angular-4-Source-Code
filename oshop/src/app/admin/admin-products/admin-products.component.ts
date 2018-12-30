import { query } from '@angular/animations';
import { DataTableResource } from 'angular5-data-table';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from 'shared/models/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    console.log(this.productService.getAll());
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products.map(
          product => {
            return <Product>{
              title: product['title'],
              category: product['category'],
              imageUrl: product['imageUrl'],
              price: product['price'],
              key: product.key
            };
          }
        );
        this.initializeTable(this.products);
      });
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0, limit: 10 })
      .then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  filter(queryValue: string) {
    const filteredProducts = (queryValue) ? this.products.filter(p => p.title.toLowerCase().includes(queryValue.toLowerCase()))
                             : this.products;
    this.initializeTable(filteredProducts);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
