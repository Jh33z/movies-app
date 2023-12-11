import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() catchPageNum = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
      this.catchPageNum.emit(event.page + 1)
  }
}
