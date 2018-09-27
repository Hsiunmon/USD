import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';


export const routes = [
    { path: '', component: CampaignComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule,  RouterModule.forChild(routes) ],
  declarations: [ CampaignComponent ]
})

export class CampaignModule {
  static routes = routes;
}
