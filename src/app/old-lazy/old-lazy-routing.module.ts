import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OldLazyPageComponent} from './old-lazy-page/old-lazy-page.component';

const routes: Routes = [
  {
    path: '', component: OldLazyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OldLazyRoutingModule {
}
