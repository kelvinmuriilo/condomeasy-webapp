import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCondominiumComponent } from './create-condominium.component';

describe('CreateCondominiumComponent', () => {
  let component: CreateCondominiumComponent;
  let fixture: ComponentFixture<CreateCondominiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCondominiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCondominiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
