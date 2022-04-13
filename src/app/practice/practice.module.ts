import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirectiveDirective } from '../app-directives/test-directive.directive';
import { FilterPipe } from '../appPipes/filter.pipe';
import { MyPipe } from '../appPipes/mypipe.pipe';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { CommonComponent } from './common/common.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { DemoComponent } from './demo/demo.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { TemplatedrivenformsComponent } from './forms/templatedrivenforms/templatedrivenforms.component';
import { HooksComponent } from './hooks/hooks.component';
import { HttpobservablesComponent } from './httpobservables/httpobservables.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { ParentComponent } from './parent/parent.component';
import { PracticeComponent } from './practice.component';
import { PracticeListComponent } from './practicelist/practicelist.component';
import { ProductsComponent } from './products/products.component';
import { SubjectcompComponent } from './subjectcomp/subjectcomp.component';
import { Component1Component } from './ViewChild/component1/component1.component';
import { HomeComponent } from './ViewChild/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
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
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PracticeModule { }
