import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-eager-container',
  templateUrl: './eager-container.component.html',
  styleUrls: ['./eager-container.component.scss']
})
export class EagerContainerComponent implements OnInit {

  @Input() showContent = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
