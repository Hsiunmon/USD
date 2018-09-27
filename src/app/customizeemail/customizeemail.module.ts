import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CustomizeemailComponent } from './customizeemail.component';

export const routes = [
    { path: '', component: CustomizeemailComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, FormsModule,RouterModule.forChild(routes) ],
    declarations: [CustomizeemailComponent ]
})

export class CustomizeemailModule {
  static routes = routes;
}