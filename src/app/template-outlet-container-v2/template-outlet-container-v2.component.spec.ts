import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletContainerV2Component } from './template-outlet-container-v2.component';

describe('ParentTemplateOutletComponent', () => {
  let component: TemplateOutletContainerV2Component;
  let fixture: ComponentFixture<TemplateOutletContainerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutletContainerV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletContainerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
