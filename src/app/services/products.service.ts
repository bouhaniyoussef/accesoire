import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../models/product'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiURL: string = 'http://localhost:8080/produits/api';
  

  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiURL);
  }

  addProduct(p: IProduct):Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.apiURL, p);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiURL+'/'+id}`);
  }
  getById(id: number) {
    return this.httpClient.get<IProduct>(`${this.apiURL+'/'+id}`);
  }

  updateProduct(id: number, p: IProduct) {
    return this.httpClient.put(`${this.apiURL+'/'+id}`, p);
  }

}
