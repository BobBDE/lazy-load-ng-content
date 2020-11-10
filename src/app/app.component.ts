import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFirstContent = false;
  showLazyTemplateOutletContent = false;
  showLazyTemplateOutletContentV2 = false;
  showLazyCDKPortalContent = false;

  toggleFirstContent(): void {
    this.showFirstContent = !this.showFirstContent;
  }

  toggleTemplateOutletContent(): void {
    this.showLazyTemplateOutletContent = !this.showLazyTemplateOutletContent;
  }

  toggleTemplateOutletContentV2(): void {
    this.showLazyTemplateOutletContentV2 = !this.showLazyTemplateOutletContentV2;
  }

  toggleLazyMatContent(): void {
    this.showLazyCDKPortalContent = !this.showLazyCDKPortalContent;
  }
}
