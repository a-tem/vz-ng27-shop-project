import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from '@app/admin/admin.component';
import {AddProductComponent, DashboardComponent, OrdersListComponent, ProductsListComponent} from '@app/admin/components';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [AdminComponent, AddProductComponent, ProductsListComponent, OrdersListComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
