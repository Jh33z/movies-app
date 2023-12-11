import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {
  bannerArr:any = []
  constructor(private moviesApiService: MovieApiService, private router:Router) { }

  ngOnInit(): void {
    this.bannerData()
  }
  bannerData(){
    this.moviesApiService.bannerApiData().subscribe(res=>{
      this.bannerArr = res.results
    })
  }
  navigateToMovie(){
    // this.router.navigate(['/watch'])
   }
}
