import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../pages/api/api.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  apis: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts() {
    this.api.GetProducts().subscribe((data: any) => {
      this.apis = data.products;

      console.log('prueba',data.products);
    });
  }

}
