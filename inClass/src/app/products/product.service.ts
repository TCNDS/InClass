import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

export interface Product {
  id?: number;
  title: string;
  description: string;
  category: string;
  price?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductList() {
    throw new Error('Method not implemented.');
  }
  private url = 'https://dummyjson.com/products';
  constructor(private http : HttpClient) { }

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/add`, product);
  }
}
