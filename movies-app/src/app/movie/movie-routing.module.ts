import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  {
    path: 'nav',
    loadChildren: () =>
      import('./components/nav/nav.module').then((m) => m.NavModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
