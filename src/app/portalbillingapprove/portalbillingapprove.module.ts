import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { PortalbillingapproveComponent } from './portalbillingapprove.component';

export const routes = [
    { path: '', component: PortalbillingapproveComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule,  RouterModule.forChild(routes) ],
    declarations: [PortalbillingapproveComponent ]
})

export class PortalbillingapproveModule {
  static routes = routes;
}
