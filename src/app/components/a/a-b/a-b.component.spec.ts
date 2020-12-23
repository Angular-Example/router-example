import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABComponent } from './a-b.component';

describe('ABComponent', () => {
  let component: ABComponent;
  let fixture: ComponentFixture<ABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
