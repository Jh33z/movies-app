import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { SharedModule } from '../../../shared/shared.module';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

@NgModule({
  declarations: [NavComponent, MoviesCategoryComponent],
  imports: [CommonModule, NavRoutingModule, SharedModule],

  exports: [NavComponent],
})
export class NavModule {}
