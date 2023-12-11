import { AfterViewInit, Directive, ElementRef, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appFilteredCard]'
})
export class FilteredCardDirective implements AfterViewInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }


  ngAfterViewInit(): void {
      this.applyStyles()
  }
  private applyStyles(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'width', '200px', RendererStyleFlags2.Important);
    this.renderer.setStyle(this.elRef.nativeElement, 'height', 'auto',  RendererStyleFlags2.Important);
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#e84393');
    this.renderer.setStyle(this.elRef.nativeElement, 'background-image', 'linear-gradient(315deg, #e84393 0%, #000000 74%)');
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', '10px');

    const imgEl = this.elRef.nativeElement.querySelector('.img');
    if(imgEl){
      this.renderer.setStyle(imgEl, 'width', '100%');
      this.renderer.setStyle(imgEl, 'min-width', '150px');
      this.renderer.setStyle(imgEl, 'height', '205px');
      this.renderer.setStyle(imgEl, 'max-height', '300px');
    }
  }
}
