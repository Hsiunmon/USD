import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PortalbillingccComponent } from './portalbillingcc.component';

export const routes = [
    { path: '', component: PortalbillingccComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, FormsModule,  RouterModule.forChild(routes) ],
  declarations: [PortalbillingccComponent ]
})

export class PortalbillingccModule {
  static routes = routes;
}
