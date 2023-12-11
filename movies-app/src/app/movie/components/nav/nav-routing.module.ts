import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

const routes: Routes = [
  { path: 'category/:category', component: MoviesCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
