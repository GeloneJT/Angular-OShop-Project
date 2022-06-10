import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$: any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {
    this.categories$ = categoryService.getCategories().valueChanges();
  }

  save(product: any) {
    this.productService.create(product);
    this.router.navigate(['/admin/prodducts'])
  }

  ngOnInit(): void {}
}
