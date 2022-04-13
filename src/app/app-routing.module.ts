import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './observable/custom/custom.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { TestingComponent } from './observable/testing/testing.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonComponent } from './practice/common/common.component';
import { CustompipesComponent } from './practice/custompipes/custompipes.component';
import { DemoComponent } from './practice/demo/demo.component';
import { ExerciseComponent } from './practice/exercise/exercise.component';
import { FormsComponent } from './practice/forms/forms.component';
import { ReactiveformsComponent } from './practice/forms/reactiveforms/reactiveforms.component';
import { TemplatedrivenformsComponent } from './practice/forms/templatedrivenforms/templatedrivenforms.component';
import { HttpobservablesComponent } from './practice/httpobservables/httpobservables.component';
import { LifecycleComponent } from './practice/lifecycle/lifecycle.component';
import { NgcontainerComponent } from './practice/ngcontainer/ngcontainer.component';
import { NgcontentComponent } from './practice/ngcontent/ngcontent.component';
import { ParentComponent } from './practice/parent/parent.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticeListComponent } from './practice/practicelist/practicelist.component';
import { ProductsComponent } from './practice/products/products.component';
import { SubjectcompComponent } from './practice/subjectcomp/subjectcomp.component';
import { HomeComponent } from './practice/ViewChild/home/home.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: '', redirectTo: 'promise', pathMatch: 'full'},
  {path: 'promise', component: PromiseComponent},
  {path: 'practice', component: PracticeComponent,
    children: [
      {path: '', component: PracticeListComponent},
      {path: 'demo', component: DemoComponent},
      {path: 'products', children: [
        {path: '', component: ProductsComponent},
        {path: 'common', component: CommonComponent}
      ]},
      {path: 'ngContent', component: NgcontentComponent},
      {path: 'ngContainer', component: NgcontainerComponent},
      {path: 'componentComm', component: ParentComponent},
      {path: 'exercise', component: ExerciseComponent},
      {path: 'http', component: HttpobservablesComponent},
      {path: 'subject', component: SubjectcompComponent},
      {path: 'lifecycle', component: LifecycleComponent},
      {path: 'viewchild', component: HomeComponent},
      {path: 'pipes', component: CustompipesComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'template', component: TemplatedrivenformsComponent},
      {path: 'reactive', component: ReactiveformsComponent},
    ]
  },
  {path: 'observable', component: ObservableComponent,
    children: [
      {path: '', component: ListComponent},
      {path: 'fromEvent', component: FromEventComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'of_from', component: OfFromComponent},
      {path: 'toArray', component: ToArrayComponent},
      {path: 'custom', component: CustomComponent},
      {path: 'testing', component: TestingComponent},
      {path: 'map', component: MapComponent},
      {path: 'pluck', component: PluckComponent},
      {path: 'filter', component: FilterComponent},
      {path: 'tap', component: TapComponent},
      {path: 'take', component: TakeComponent},
    ]
  },
  {path:'notfound', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
