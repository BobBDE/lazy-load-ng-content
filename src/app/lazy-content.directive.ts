import {Directive, TemplateRef} from '@angular/core';

interface LibContextDashboardColumnData {
  $implicit: string;
}

@Directive({
  selector: '[appLazyContent]'
})
export class LazyContentDirective {
  constructor(public template: TemplateRef<LibContextDashboardColumnData>) {
  }
}
