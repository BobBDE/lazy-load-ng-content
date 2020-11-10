import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerContainerComponent } from './eager-container.component';

describe('ParentContainerComponent', () => {
  let component: EagerContainerComponent;
  let fixture: ComponentFixture<EagerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
