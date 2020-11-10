import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {LazyContentDirective} from '../lazy-content.directive';

@Component({
  selector: 'app-template-outlet-container',
  templateUrl: './template-outlet-container.component.html',
  styleUrls: ['./template-outlet-container.component.scss']
})
export class TemplateOutletContainerComponent implements OnInit {

  @Input() showContent = false;

  @ContentChild(LazyContentDirective, {read: TemplateRef, static: true}) template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.template);
  }

}
