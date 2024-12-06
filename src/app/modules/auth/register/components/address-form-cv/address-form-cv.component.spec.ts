import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormCvComponent } from './address-form-cv.component';

describe('AddressFormCvComponent', () => {
  let component: AddressFormCvComponent;
  let fixture: ComponentFixture<AddressFormCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
