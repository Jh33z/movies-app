import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'view-movie/:id', component: ViewMovieComponent },
  // {
  //   path: 'view-movie/:id',
  //   loadChildren: () =>
  //     import('./view-movie/view-movie.module').then((m) => m.ViewMovieModule),
  // },
  {
    path: 'main',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },

  {
    path: 'movie',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
