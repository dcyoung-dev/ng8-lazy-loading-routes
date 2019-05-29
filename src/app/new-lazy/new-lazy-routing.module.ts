import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewLazyPageComponent} from './new-lazy-page/new-lazy-page.component';

const routes: Routes = [
  {
    path: '', component: NewLazyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewLazyRoutingModule {
}
