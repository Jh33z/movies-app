import { Component, Input, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/movie/services/movie-api.service';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  defaultImage:string ="/assets/images/default-movie.jpg"
  showOverview : boolean = false;
  showFullOverview:boolean =false
  isOverviewLong: boolean= false;
  @Input() movie:any
  constructor(){}

  ngOnInit(): void {
    this.showFullOverview = this.isOverviewLong;
  }
  toggleShowMore(){
    this.showFullOverview = !this.showFullOverview
  }

}
