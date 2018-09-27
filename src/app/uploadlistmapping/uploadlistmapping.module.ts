import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { UploadlistmappingComponent } from './uploadlistmapping.component';

export const routes = [
  { path: '', component: UploadlistmappingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes) ],
  declarations: [ UploadlistmappingComponent ]
})

export class UploadlistmappingModule {
  static routes = routes;
}
