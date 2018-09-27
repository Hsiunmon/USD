import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile.component';

export const routes = [
    { path: '', component: UserprofileComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, FormsModule, RouterModule.forChild(routes) ],
    declarations: [UserprofileComponent ]
})
export class UserprofileModule {
  static routes = routes;
}
