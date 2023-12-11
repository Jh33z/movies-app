import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const BASE_URL = new InjectionToken<string>('api url');
export const API_KEY = new InjectionToken<string>('api key');

@Injectable({
  providedIn: 'root',
})
export class ViewMovieService {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    @Inject(API_KEY) private apiKey: string,

    private http: HttpClient
  ) {}

  //viewMovieApiData
  viewMovieDetailsData(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`
    );
  }
}
