import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAComponent } from './a-a.component';

describe('AAComponent', () => {
  let component: AAComponent;
  let fixture: ComponentFixture<AAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
