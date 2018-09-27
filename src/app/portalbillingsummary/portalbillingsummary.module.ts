import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PortalbillingsummaryComponent } from './portalbillingsummary.component';

export const routes = [
    { path: '', component: PortalbillingsummaryComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, FormsModule,  RouterModule.forChild(routes) ],
    declarations: [PortalbillingsummaryComponent ]
})

export class PortalbillingsummaryModule {
  static routes = routes;
}
