import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from 'src/app/app-directives/test-directive.directive';
import { DesignUtilitiesService } from 'src/app/services/design-utilities.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit, AfterContentInit {

  userName:string = 'Rahul';
  @ContentChild('childContent') childContent: ElementRef;
  @ViewChild(TestDirectiveDirective) test: TestDirectiveDirective;

  constructor(private render: Renderer2) {
   }
  ngAfterContentInit() {
    console.log(this.childContent.nativeElement);
    this.render.addClass(this.childContent.nativeElement, 'child_card');
    this.render.setStyle(this.childContent.nativeElement, 'color', 'green');
  }

  ngOnInit(): void {
  }

  showAlert() {
    alert("User Name is : " + this.userName);

    let text = this.render.createText(' has 30 members.')
    this.render.appendChild(this.childContent.nativeElement, text);
  }

  changeColor(color) {
    this.test.changeBG(color);
  }

}
