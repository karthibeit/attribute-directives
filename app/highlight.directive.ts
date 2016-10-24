import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive ({
  selector: '[myHighlight]',

})
export class HighlightDirective {
  private _defaultColor = 'red';
  constructor(private el: ElementRef, private render: Renderer){}

  @Input() set defaultColor(colorname: string){
    this._defaultColor = colorname;
  }

  @Input() myHighlight: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.myHighlight || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
