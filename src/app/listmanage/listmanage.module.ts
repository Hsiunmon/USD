import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ListmanageComponent } from './listmanage.component';

export const routes = [
    { path: '', component: ListmanageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
    declarations: [ListmanageComponent ]
})

export class ListmanageModule {
  static routes = routes;
}
