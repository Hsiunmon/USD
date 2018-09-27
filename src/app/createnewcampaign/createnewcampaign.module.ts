import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreatenewcampaignComponent } from './createnewcampaign.component';

export const routes = [
    { path: '', component: CreatenewcampaignComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
    declarations: [ CreatenewcampaignComponent ]
})

export class CreatenewcampaignModule {
  static routes = routes;
}