import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import { ApiComponent } from './api/api.component';
import {HttpClientModule} from "@angular/common/http";
import {TablesComponent} from "../components/tables/tables.component";
import { EditComponent } from './api/edit/edit.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, ApiComponent, TablesComponent, EditComponent],
  imports: [
      CommonModule,
      PagesRoutingModule,
      RouterModule,
      HttpClientModule,
  ],
  exports: [HomeComponent, NavbarComponent, ApiComponent, TablesComponent]
})
export class PagesModule { }
