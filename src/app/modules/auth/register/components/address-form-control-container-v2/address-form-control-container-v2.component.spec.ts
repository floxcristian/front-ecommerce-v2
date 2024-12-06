import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormControlContainerV2Component } from './address-form-control-container-v2.component';

describe('AddressFormControlContainerV2Component', () => {
  let component: AddressFormControlContainerV2Component;
  let fixture: ComponentFixture<AddressFormControlContainerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormControlContainerV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormControlContainerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
