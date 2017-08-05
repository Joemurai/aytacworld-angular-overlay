import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer } from '@angular/core';

let identifier = 0;

@Directive({ selector: '[overlay]' })
export class OverlayDirective implements OnChanges, OnInit {
  @Input() overlay: boolean;
  @Input() overlayText: string = 'Loading';
  @Input() overlaySpinner: boolean;
  private _originStyle: string;
  private _id: string = `overlay-item-${identifier++}`;
  private _updateInner: (div: Element, options: any) => void;

  constructor (private el: ElementRef, private renderer: Renderer) { }

  ngOnInit (): void {
    const el: HTMLElement = this.el.nativeElement;
    const div: HTMLDivElement = this.renderer.createElement(el, 'div');
    this._updateInner = this.overlaySpinner ? this._updateSpinner : this._updateLabel;

    div.className = this._id;
    this.overlayText = this.overlayText || '';
  }

  ngOnChanges (): void {
    const el: HTMLElement = this.el.nativeElement;
    const div = el.querySelector('.' + this._id);
    if (div) {
      if (this.overlay) {
        this._show(el, div);
      } else {
        this._reset(el, div);
      }
    }
  }

  private _show (el: HTMLElement, div: Element): void {
    // update root element
    this._originStyle = el.getAttribute('style') || '';
    el.setAttribute('style', `position: relative;${this._originStyle}`);
    this.renderer.setElementClass(el, 'overlay', true);

    // update overlay-item
    const styles = `position: absolute;
        width:${el.clientWidth}px;
        height:${el.clientHeight}px;
        top: 0;
        left: 0;
        background: #ccc;
        opacity: 0.7;
        margin: 0;
        text-align: center;`;
    div.setAttribute('style', styles);
    this._updateInner(div, { height: el.clientHeight });
  }

  private _reset (el: HTMLElement, div: Element): void {
    el.setAttribute('style', this._originStyle);
    div.setAttribute('style', '');
    div.innerHTML = '';
    this.renderer.setElementClass(el, 'overlay', false);
  }

  private _updateSpinner (div: Element, options: any): void {
    div.innerHTML = `<svg viewBox="0 0 100 100" style="width:50px; margin-top:${(options.height / 2) - 25}px;">
  <circle id="hello1" cx="50" cy="50" r="40" stroke-dasharray="125" stroke="black" stroke-width="3" fill="none">
     <animate attributeType="XML" attributeName="stroke-dashoffset" from="0" to="-1000" dur="4s" repeatCount="indefinite" fill="freeze" />
  </circle>
</svg>`;
  }

  private _updateLabel (div: Element, options: any): void {
    const label = this.renderer.createElement(div, 'label');
    label.setAttribute('style', `display: inline-block; margin-top: ${(options.height - 18) / 2}px;`);
    label.innerText = this.overlayText;
  }

}
