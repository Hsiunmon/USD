import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CreativelibraryComponent } from './creativelibrary.component';

export const routes = [
    { path: '', component: CreativelibraryComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes) ],
    declarations: [CreativelibraryComponent ]
})

export class CreativelibraryModule {
  static routes = routes;
}