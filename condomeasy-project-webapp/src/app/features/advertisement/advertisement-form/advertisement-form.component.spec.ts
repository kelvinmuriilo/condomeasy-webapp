import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementFormComponent } from './advertisement-form.component';

describe('AdvertisementFormComponent', () => {
  let component: AdvertisementFormComponent;
  let fixture: ComponentFixture<AdvertisementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
