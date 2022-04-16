import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservableComponent } from './observable/observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PracticeComponent } from './practice/practice.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: '', redirectTo: 'promise', pathMatch: 'full'},
  {path: 'promise', component: PromiseComponent},
  {path: 'practice', component: PracticeComponent,
    loadChildren: () => import('./practice/practice.module').then(m => m.PracticeModule)
  },
  {path: 'observable', component: ObservableComponent,
    loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule)
  },
  {path:'notfound', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
