import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EagerContainerComponent} from './eager-container/eager-container.component';
import {ChildContentComponent} from './child-content/child-content.component';
import {LazyCdkContainerComponent} from './lazy-cdk-container/lazy-cdk-container.component';
import {PortalModule} from '@angular/cdk/portal';
import {LazyContentDirective} from './lazy-content.directive';
import { TemplateOutletContainerComponent } from './template-outlet-container/template-outlet-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EagerContainerComponent,
    ChildContentComponent,
    LazyCdkContainerComponent,
    LazyContentDirective,
    TemplateOutletContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
