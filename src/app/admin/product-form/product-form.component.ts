import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$: any;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories().valueChanges();
  }

  save(product: any) {
    console.log(product);
    
  }

  ngOnInit(): void {}
}
