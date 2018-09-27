import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { ProofComponent } from './proof.component';

export const routes = [
  { path: '', component: ProofComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule,  RouterModule.forChild(routes) ],
  declarations: [ProofComponent ]
})

export class ProofModule {
  static routes = routes;
}
