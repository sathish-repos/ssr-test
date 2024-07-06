import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogV1Component } from './dog-v1.component';

describe('DogV1Component', () => {
  let component: DogV1Component;
  let fixture: ComponentFixture<DogV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
