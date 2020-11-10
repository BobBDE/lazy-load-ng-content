import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appLazyContent]'
})
export class LazyContentDirective {
  constructor(public template: TemplateRef<any>) {
  }
}
