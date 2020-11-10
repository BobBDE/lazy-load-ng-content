import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletContainerComponent } from './template-outlet-container.component';

describe('ParentTemplateOutletComponent', () => {
  let component: TemplateOutletContainerComponent;
  let fixture: ComponentFixture<TemplateOutletContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutletContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
