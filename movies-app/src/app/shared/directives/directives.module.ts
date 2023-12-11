import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredCardDirective } from './directives-list/filtered-card.directive';


@NgModule({
  declarations: [ FilteredCardDirective],
  imports: [
    CommonModule
  ],
  exports: [ FilteredCardDirective]
})
export class DirectivesModule { }
