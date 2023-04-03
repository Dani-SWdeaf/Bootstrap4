import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesRoutingModule} from "./pages/pages-routing.module";

const routes: Routes = [
  {
    path: 'Inicio',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
