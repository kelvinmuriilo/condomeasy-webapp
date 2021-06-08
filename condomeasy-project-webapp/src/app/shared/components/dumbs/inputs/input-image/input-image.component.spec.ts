import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImageComponent } from './input-image.component';

describe('InputImageComponent', () => {
  let component: InputImageComponent;
  let fixture: ComponentFixture<InputImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
