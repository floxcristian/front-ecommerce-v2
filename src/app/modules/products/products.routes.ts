// Angular
import { Routes } from '@angular/router';
// Components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: ':slug',
    component: ProductDetailComponent,
  },
];
