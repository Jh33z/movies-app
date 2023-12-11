import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMovieComponent } from './view-movie.component';

@NgModule({
  declarations: [ViewMovieComponent],
  imports: [CommonModule],
  exports: [ViewMovieComponent],
})
export class ViewMovieModule {}
