import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieBody } from '../../models/movie-model';


export const BASE_URL = new InjectionToken<string>('api url');
export const API_KEY = new InjectionToken<string>('api key');

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(
    @Inject(BASE_URL) private baseUrl:string,
    @Inject(API_KEY) private apiKey:string,
    private http:HttpClient
  
  ) { }
    //banner movie data
    bannerApiData():Observable<MovieBody>{
      return this.http.get<MovieBody>(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
    }

    
    //search movie data
    searchMovieApi(searchWord:any):Observable<any>{
      return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchWord}`)
    }


    //movie category data
    categoryMoviesApiData(page:number, category:string):Observable<MovieBody>{
      return this.http.get<MovieBody>(`${this.baseUrl}/movie/${category}?api_key=${this.apiKey}&page=${page}`)
    }
}

