import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() categoryChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeCategory(newCategory: string): void {
    this.categoryChanged.emit(newCategory);
  }
}
