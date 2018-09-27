import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomizepurlComponent } from './customizepurl.component';

export const routes = [
    { path: '', component: CustomizepurlComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes) ],
    declarations: [CustomizepurlComponent]
})

export class CustomizepurlModule {
  static routes = routes;
}