import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { PerunitcostComponent } from './perunitcost/perunitcost.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  { path: '', component: PerunitcostComponent }, // Default route
  { path: 'calc', component: CalcComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-table', component: ProductTableComponent }, // Add this route
  { path: 'per-unit-cost', component: PerunitcostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
