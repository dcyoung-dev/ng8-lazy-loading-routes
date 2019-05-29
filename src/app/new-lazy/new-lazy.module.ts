import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewLazyRoutingModule} from './new-lazy-routing.module';
import {NewLazyPageComponent} from './new-lazy-page/new-lazy-page.component';

@NgModule({
  declarations: [NewLazyPageComponent],
  imports: [
    CommonModule,
    NewLazyRoutingModule
  ]
})
export class NewLazyModule {
}
