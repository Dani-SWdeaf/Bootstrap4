import { Component, OnInit } from '@angular/core';
import {ApiService} from "./api.service";
import {Productos} from "./Products";
import {any} from "codelyzer/util/function";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  apis: any[] = [];
  id = '';

  constructor(private api: ApiService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetProducts();
    this.mostrar();
  }

  mostrar() {
    this.id = this.activateRoute.snapshot.params.get('id');
  }

    GetProducts() {
      this.api.GetProducts().subscribe((data: any) => {
        this.apis = data.products;

        console.log('prueba',data.products);
      });
    }

}
