import {AfterContentInit, Component, ContentChild, Input, OnInit, ViewContainerRef} from '@angular/core';
import {LazyContentDirective} from '../lazy-content.directive';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-lazy-cdk-container',
  templateUrl: './lazy-cdk-container.component.html',
  styleUrls: ['./lazy-cdk-container.component.scss']
})
export class LazyCdkContainerComponent implements OnInit,
  AfterContentInit {

  // tslint:disable-next-line:variable-name
  _showContent = false;
  @Input() set showContent(isLoading: boolean) {
    this._showContent = isLoading;
    this.lazyRender();
  }

  /** Content that will be rendered lazily. */
  @ContentChild(LazyContentDirective, {static: true}) private lazyContent: LazyContentDirective;

  /** Portal holding the user's content. */
  portal: TemplatePortal;


  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.lazyRender();
  }

  lazyRender(): void {
    // if we can render the portal
    if (this.lazyContent && this._showContent) {
      // don't re-create the portal if already present
      if (this.portal == null) {
        this.portal = new TemplatePortal(this.lazyContent.template, this.viewContainerRef);
      }
    } else {
      this.portal = null;
    }
  }


}
