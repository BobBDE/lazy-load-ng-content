import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit,
  OnDestroy {

  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log('[Initialized] : ' + this.name);
  }

  ngOnDestroy(): void {
    console.log('[Destroy] : ' + this.name);
  }



}
