import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { UploadlistComponent } from './uploadlist.component';

export const routes = [
  { path: '', component: UploadlistComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes) ],
  declarations: [ UploadlistComponent ]
})

export class UploadlistModule {
  static routes = routes;
}
