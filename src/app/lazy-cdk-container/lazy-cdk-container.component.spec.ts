import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCdkContainerComponent } from './lazy-cdk-container.component';

describe('LazyMaterialContainerComponent', () => {
  let component: LazyCdkContainerComponent;
  let fixture: ComponentFixture<LazyCdkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyCdkContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCdkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
