# aytacworld-angular-overlay

Overlay with spinner and text

Spinner and text options should be added.

## Install

`npm install --save aytacworld-angular-overlay`

## Usage

app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

app.component.html
```html
<div [overlay]="true"></div>
```

## Api

|Input       |  Description   |  Type  |  Default  |
|------------|----------------|--------|-----------|
|overlay    |  add the overlay-item | boolean | undefined |
|overlayText    |  text to show when overlay is active | string | Loading |
|overlaySpinner   |  show spinner | boolean | undefined |

## Test

`npm test`

## Examples

[Plunker](http://plnkr.co/edit/RlV3gpTzGYii8qhUV6qi)

`cd example && npm i && npm start`

## MIT License

Copyright (c) 2017 Adem Aytaç

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
