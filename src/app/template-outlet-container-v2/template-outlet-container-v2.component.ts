import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {LazyContentDirective} from '../lazy-content.directive';

@Component({
  selector: 'app-template-outlet-container-v2',
  templateUrl: './template-outlet-container-v2.component.html',
  styleUrls: ['./template-outlet-container-v2.component.scss']
})
export class TemplateOutletContainerV2Component {

  // tslint:disable-next-line:variable-name
  _showContent = false;
  @Input() set showContent(showContent: boolean) {
    this._showContent = showContent;
    this.lazyRender();
  }

  // Get the template reference to pass it to ngTemplateOutlet
  // the static true is really important to have the template instantiated before the ngOnInit
  @ContentChild(LazyContentDirective, {read: TemplateRef, static: true}) template: TemplateRef<any>;

  displayedTemplate: TemplateRef<any> | null = null;

  lazyRender(): void {
    // if we can render the template
    if (this.template && this._showContent) {
      // don't re-create the template if already present
      if (this.displayedTemplate == null) {
        this.displayedTemplate = this.template;
      }
    } else {
      this.displayedTemplate = null;
    }
  }

}
