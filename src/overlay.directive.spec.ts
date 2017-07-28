// tslint:disable:max-classes-per-file
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayDirective } from './overlay.directive';

@Component({ template: `<div [overlay]="overlay"></div>` })
class TestComponent1 { overlay: boolean; text: string; spinner: boolean; }

@Component({ template: `<div [overlay]="overlay"></div>` }) // TODO create other parameters
class TestComponent2 { overlay: boolean; text: string; spinner: boolean; }

let identifier = 0;

describe('OverlayDirective', () => {
  let fixture: ComponentFixture<TestComponent1 | TestComponent2>;
  let el: HTMLDivElement;
  let comp: TestComponent1 | TestComponent2;
  let overlayItemSelector: string;

  function getHtml (selector: string = 'div'): string | undefined {
    const ret = el && el.querySelector && el.querySelector(selector);
    if (ret) {
      return ret.innerHTML;
    }
    return undefined;
  }

  function getHtmlCount (selector: string = 'div'): number {
    const ret = el && el.querySelectorAll && el.querySelectorAll(selector);
    if (ret) {
      return ret.length;
    }
    return 0;
  }

  function getText (selector: string = 'div'): string | undefined {
    const ret = el && el.querySelector && el.querySelector(selector);
    if (ret) {
      return ret.textContent || undefined;
    }
    return undefined;
  }

  function getStyle (selector: string = 'div'): string {
    const ret = el && el.querySelector && el.querySelector(selector);
    if (ret) {
      return (ret.getAttribute && ret.getAttribute('style')) || '';
    }
    return '';
  }

  describe('only overlay parameter is filled in', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          OverlayDirective,
          TestComponent1
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent1);
      el = fixture.nativeElement;
      comp = fixture.componentInstance;
      overlayItemSelector = `.overlay-item-${identifier++}`;
    });

    it('should be defined', () => {
      expect(comp).toBeDefined();
    });

    it('should not show the overlay on init', () => {
      fixture.detectChanges();
      expect(getStyle(overlayItemSelector)).toBe('');
    });

    it('should not show the overlay on false is passed', () => {
      fixture.detectChanges();
      comp.overlay = false;
      fixture.detectChanges();
      expect(getStyle(overlayItemSelector)).toBe('');
    });

    it(`should not contain text on false`, () => {
      fixture.detectChanges();
      comp.overlay = false;
      fixture.detectChanges();
      expect(getText(overlayItemSelector)).toBeUndefined();
    });

    it('should show the overlay on true is passed', () => {
      fixture.detectChanges();
      comp.overlay = true;
      fixture.detectChanges();
      expect(getStyle(overlayItemSelector).startsWith('position: absolute;')).toBe(true);
    });

    it(`should contain 'Loading' as text`, () => {
      fixture.detectChanges();
      comp.overlay = true;
      fixture.detectChanges();
      expect(getText(overlayItemSelector)).toBe('Loading');
    });
  });

  describe('all parameters are filled in', () => {
    // beforeEach(() => {
    //   TestBed.configureTestingModule({
    //     declarations: [
    //       OverlayDirective,
    //       TestComponent2
    //     ]
    //   }).compileComponents();

    //   fixture = TestBed.createComponent(TestComponent2);
    //   el = fixture.nativeElement;
    //   comp = fixture.componentInstance;
    // });

    // it('should be defined', () => {
    //   expect(comp).toBeDefined();
    // });

    // it('should not show the overlay on init', () => {
    //   expect(true).toBe(true);
    // });

    // it('should show the overlay on true is passed', () => {
    //   expect(true).toBe(true);
    // });
  });
});
