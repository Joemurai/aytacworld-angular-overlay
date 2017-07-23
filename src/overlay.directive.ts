import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer } from '@angular/core';

@Directive({ selector: '[overlay]' })
export class OverlayDirective implements OnChanges, OnInit {
  @Input() overlay: boolean;
  private originStyle: string;

  constructor (private el: ElementRef, private renderer: Renderer) { }

  ngOnInit (): void {
    const el: HTMLElement = this.el.nativeElement;
    const div: HTMLDivElement = this.renderer.createElement(el, 'div');
    div.className = 'overlay-item';
  }

  ngOnChanges (): void {
    const el: HTMLElement = this.el.nativeElement;
    const div = el.querySelector('.overlay-item');
    if (div) {
      if (this.overlay) {
        // update root element
        this.originStyle = el.getAttribute('style') || '';
        const minHeight = el.clientHeight < 300 ? 'height:300px;' : '';
        el.setAttribute('style', `position: relative;${minHeight}${this.originStyle}`);
        this.renderer.setElementClass(el, 'overlay', true);

        // update overlay-item
        const styles = `position: absolute;
        width:${el.clientWidth}px;
        height:${el.clientHeight}px;
        top: 0;
        left: 0;
        background: #ccc;
        opacity: 0.7;`;
        div.setAttribute('style', styles);
      } else {
        el.setAttribute('style', this.originStyle);
        div.setAttribute('style', '');
        this.renderer.setElementClass(el, 'overlay', false);
      }
    }
  }
}
