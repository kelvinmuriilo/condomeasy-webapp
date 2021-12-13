import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementFilterComponent } from './advertisement-filter.component';

describe('AdvertisementFilterComponent', () => {
  let component: AdvertisementFilterComponent;
  let fixture: ComponentFixture<AdvertisementFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
