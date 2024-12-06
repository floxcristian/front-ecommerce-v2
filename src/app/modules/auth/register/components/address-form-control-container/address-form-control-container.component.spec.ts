import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormControlContainerComponent } from './address-form-control-container.component';

describe('AddressFormControlContainerComponent', () => {
  let component: AddressFormControlContainerComponent;
  let fixture: ComponentFixture<AddressFormControlContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormControlContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
