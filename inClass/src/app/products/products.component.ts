import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})


export class ProductsComponent implements OnInit {
  products: any [] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void { 
    this.getProductList();
  }
  
  getProductList(): void {
    this.isLoading = true;

    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res.products;
        this.isLoading = false;
      },
     (error) => {
        console.error('get data error:', error);
        this.errorMessage = 'Failed to load products.';
      },
    );
  }

  addNewProduct(): void {
    const newProd: Product = {
      title: 'New Gadget',
      description: 'A high-tech device.',
      category: 'electronics'
    };

    this.productService.addProduct(newProd).subscribe(
      (res) => {
        this.products = [res, ...this.products];
        alert('Product added successfully!');
      },
      (err) => console.error(err)
    );
  }

  
      
}
