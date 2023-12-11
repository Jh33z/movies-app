import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMovieComponent } from './view-movie.component';

const routes: Routes = [
  //   { path: '', component: ViewMovieComponent },
];

@NgModule({
  declarations: [ViewMovieComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class viewMovieRoutingModule {}
