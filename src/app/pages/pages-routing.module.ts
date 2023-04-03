import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ApiComponent} from "./api/api.component";
import {TablesComponent} from "../components/tables/tables.component";
import {EditComponent} from "./api/edit/edit.component";

const routes: Routes = [
  {
    path: 'Inicio',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'Api/Productos',
        component: ApiComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'Api/Productos/:id',
        component: ApiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
