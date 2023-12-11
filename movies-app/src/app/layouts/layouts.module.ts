import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../shared/directives/directives.module';
import { MovieModule } from '../movie/movie.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavModule } from '../movie/components/nav/nav.module';

//primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],

  imports: [
    CommonModule,
    SharedModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    DirectivesModule,
    MovieModule,
    NavModule,
    RouterModule,
  ],

  exports: [HeaderComponent, FooterComponent],
})
export class LayoutsModule {}
