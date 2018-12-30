import { CategoryService } from 'shared/models/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories;
  @Input('category') category: string;

  constructor(
    categoryService: CategoryService) {
    categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
  }

}
