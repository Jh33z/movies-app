import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';

import {BASE_URL, API_KEY, MovieApiService} from './movie/services/movie-api.service'
import { environment } from 'src/environments/environment';


//modules
import { LayoutsModule } from './layouts/layouts.module';
import { MovieModule } from './movie/movie.module';
import { SharedModule } from './shared/shared.module';
import { ViewMovieModule } from './view-movie/view-movie.module';

 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule,
    SharedModule,
    MovieModule,
    ViewMovieModule
  ],
  providers: [
    MovieApiService,
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
    {
      provide: API_KEY,
      useValue: environment.apiKey,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
