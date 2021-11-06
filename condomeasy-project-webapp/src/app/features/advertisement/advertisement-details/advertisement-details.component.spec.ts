import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDetailsComponent } from './advertisement-details.component';

describe('AdvertisementDetailsComponent', () => {
  let component: AdvertisementDetailsComponent;
  let fixture: ComponentFixture<AdvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
