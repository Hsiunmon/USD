import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CustomizedirectmailComponent } from './customizedirectmail.component';

export const routes = [
    { path: '', component: CustomizedirectmailComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes) ],
    declarations: [ CustomizedirectmailComponent ]
})

export class CustomizedirectmailModule {
  static routes = routes;
}