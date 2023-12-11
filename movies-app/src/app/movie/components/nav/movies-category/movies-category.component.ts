import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/movie/services/movie-api.service';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.css'],
})
export class MoviesCategoryComponent implements OnInit {
  moviesArr: any = [];
  page: number = 1;
  category: any = '';
  constructor(
    private movieApiService: MovieApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.category = param.get('category');
      this.getMoviesCategory();
    });
  }

  getMoviesCategory() {
    this.movieApiService
      .categoryMoviesApiData(this.page, this.category)
      .subscribe((res) => {
        this.moviesArr = res.results;
        console.log(this.page);
      });
  }

  changeCategory(newCategory: string) {
    this.category = newCategory;
    this.getMoviesCategory();
  }
  pagination(page: number) {
    this.page = page;
    console.log(this.page);
  }
}
