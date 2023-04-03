import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) { }

  GetProducts() {
    return this.http.get(this.url);
  }

  EditarProducto(producto: any) {
    return this.http.put(this.url, producto.id, producto);
  }
}
