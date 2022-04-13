import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import {MatDividerModule} from '@angular/material/divider';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import {MatCardModule} from '@angular/material/card';
import { TestingComponent } from './observable/testing/testing.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { PracticeComponent } from './practice/practice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './practice/demo/demo.component';
import { PracticeListComponent } from './practice/practicelist/practicelist.component';
import { CommonComponent } from './practice/common/common.component';
import { ProductsComponent } from './practice/products/products.component';
import { NgcontentComponent } from './practice/ngcontent/ngcontent.component';
import { CardComponent } from './practice/card/card.component';
import { NgcontainerComponent } from './practice/ngcontainer/ngcontainer.component';
import { ParentComponent } from './practice/parent/parent.component';
import { ChildComponent } from './practice/child/child.component';
import { ExerciseComponent } from './practice/exercise/exercise.component';
import { HttpobservablesComponent } from './practice/httpobservables/httpobservables.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './practice/comp1/comp1.component';
import { Comp2Component } from './practice/comp2/comp2.component';
import { Comp3Component } from './practice/comp3/comp3.component';
import { Comp4Component } from './practice/comp4/comp4.component';
import { SubjectcompComponent } from './practice/subjectcomp/subjectcomp.component';
import { LifecycleComponent } from './practice/lifecycle/lifecycle.component';
import { HooksComponent } from './practice/hooks/hooks.component';
import { HomeComponent } from './practice/ViewChild/home/home.component';
import { Component1Component } from './practice/ViewChild/component1/component1.component';
import { TestDirectiveDirective } from './app-directives/test-directive.directive';
import { CustompipesComponent } from './practice/custompipes/custompipes.component';
import { MyPipe } from './appPipes/mypipe.pipe';
import { FilterPipe } from './appPipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './practice/forms/forms.component';
import { TemplatedrivenformsComponent } from './practice/forms/templatedrivenforms/templatedrivenforms.component';
import { ReactiveformsComponent } from './practice/forms/reactiveforms/reactiveforms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    TakeComponent,
    PracticeComponent,
    PageNotFoundComponent,
    ProductsComponent,
    DemoComponent,
    PracticeListComponent,
    CommonComponent,
    NgcontentComponent,
    CardComponent,
    NgcontainerComponent,
    ParentComponent,
    ChildComponent,
    ExerciseComponent,
    HttpobservablesComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    SubjectcompComponent,
    LifecycleComponent,
    HooksComponent,
    HomeComponent,
    Component1Component,
    TestDirectiveDirective,
    CustompipesComponent,
    MyPipe,
    FilterPipe,
    FormsComponent,
    TemplatedrivenformsComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
