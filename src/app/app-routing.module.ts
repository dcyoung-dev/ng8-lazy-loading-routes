import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'old-lazy',
    loadChildren: './old-lazy/old-lazy.module#OldLazyModule'
  },
  {
    path: 'new-lazy',
    loadChildren: () => import('./new-lazy/new-lazy.module')
      .then(m => m.NewLazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
