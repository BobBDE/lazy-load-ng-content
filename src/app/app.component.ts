import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFirstContent = false;
  showLazyTemplateOutletContent = false;
  showLazyCDKPortalContent = false;

  toggleFirstContent(): void {
    this.showFirstContent = !this.showFirstContent;
  }

  toggleTemplateOutletContent(): void {
    this.showLazyTemplateOutletContent = !this.showLazyTemplateOutletContent;
  }

  toggleLazyMatContent(): void {
    this.showLazyCDKPortalContent = !this.showLazyCDKPortalContent;
  }
}
