import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SearchedMovie } from 'src/app/models/movie-model';
import { MovieApiService } from '../../services/movie-api.service';
import { debounceTime, delay, of, switchMap } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-by-input',
  templateUrl: './filter-by-input.component.html',
  styleUrls: ['./filter-by-input.component.css']
})
export class FilterByInputComponent implements OnInit, OnDestroy {
  searchResult:SearchedMovie[] |null= null
 @Input() searchFormValue!: FormGroup;
 @Output() close: EventEmitter<void> = new EventEmitter<void>();
  constructor(private movieApiService:MovieApiService) { }
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto'
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
    this.filterByInput();
  }
  //filterby input value start
  filterByInput(){ 
    this.searchFormValue.get('movieName')?.valueChanges.pipe(debounceTime(1000), switchMap((res) => 
    this.movieApiService.searchMovieApi(res)
   )).subscribe(
       res=>this.searchResult = res.results
       )
 }
   //filterby input value end


 closePopup(){
  this.close.emit()
 }
}
