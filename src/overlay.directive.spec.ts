// tslint:disable:max-classes-per-file
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayDirective } from './overlay.directive';

@Component({ template: `<div [overlay]="overlay" ></div>` })
class TestComponent1 { overlay: boolean; }

describe('OverlayDirective', () => {
  let fixture: ComponentFixture<TestComponent1>;
  let el: HTMLElement;
  let comp: TestComponent1;

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
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
