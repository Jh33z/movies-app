import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { SharedModule } from '../shared/shared.module';
import { FilterByInputComponent } from './components/filter-by-input/filter-by-input.component';
import { FormsModule } from '@angular/forms';
//primeng
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [MovieComponent, HeroCarouselComponent, FilterByInputComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    CarouselModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    MessageModule,
  ],
  exports: [MovieComponent, HeroCarouselComponent, FilterByInputComponent],
})
export class MovieModule {}
