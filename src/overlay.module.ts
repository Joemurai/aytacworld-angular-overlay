import { NgModule } from '@angular/core';

import { OverlayDirective } from './overlay.directive';

@NgModule({
  declarations: [
    OverlayDirective
  ],
  exports: [
    OverlayDirective
  ]
})
export class OverlayModule { }
