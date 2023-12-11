import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MoviesCardComponent } from './components/movies-card/movies-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';
import { SharedRouting } from './shared-routing.module';
import { RouterModule } from '@angular/router';

//primeng
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [SharedComponent, PaginationComponent, MoviesCardComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    ReactiveFormsModule,
    DirectivesModule,
    SharedRouting,
    RouterModule,
  ],
  exports: [
    PaginationComponent,
    MoviesCardComponent,
    DirectivesModule,
    SharedComponent,
  ],
})
export class SharedModule {}
