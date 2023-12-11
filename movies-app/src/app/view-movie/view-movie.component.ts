import { Component, OnInit } from '@angular/core';
import { ViewMovieService } from './services/view-movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css'],
})
export class ViewMovieComponent implements OnInit {
  constructor(
    private viewMovieService: ViewMovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(getParamId);
    console.log('hello');
    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.viewMovieService.viewMovieDetailsData(id).subscribe((res) => {
      console.log(res);
    });
  }
}
