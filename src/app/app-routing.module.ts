import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./pages/layout/layout.component";
import {ProductsComponent} from "./pages/products/products.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'homepage',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },

    ]
  },

  {
    path: 'products',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
