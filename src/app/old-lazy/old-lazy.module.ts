import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OldLazyRoutingModule} from './old-lazy-routing.module';
import {OldLazyPageComponent} from './old-lazy-page/old-lazy-page.component';

@NgModule({
  declarations: [OldLazyPageComponent],
  imports: [
    CommonModule,
    OldLazyRoutingModule
  ]
})
export class OldLazyModule {
}
