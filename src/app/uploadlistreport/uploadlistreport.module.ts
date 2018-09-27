import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { UploadlistreportComponent } from './uploadlistreport.component';

export const routes = [
    { path: '', component: UploadlistreportComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes) ],
    declarations: [UploadlistreportComponent ]
})

export class UploadlistreportModule {
  static routes = routes;
}
