import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from '../promise/promise.component';
import { CustomComponent } from './custom/custom.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { ObservableComponent } from './observable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { TestingComponent } from './testing/testing.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const obsRoutes: Routes = [
  // {path: 'observable', component: ObservableComponent,
  //   children: [
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
  //   ]
  // }
]


@NgModule({
  declarations: [
    PromiseComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    TestingComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(obsRoutes)
  ]
})
export class ObservableModule { 
  constructor() {
    console.log('ObservableModule loaded.')
  }
}
