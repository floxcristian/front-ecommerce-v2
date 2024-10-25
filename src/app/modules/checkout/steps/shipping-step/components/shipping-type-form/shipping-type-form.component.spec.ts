import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingTypeFormComponent } from './shipping-type-form.component';

describe('ShippingTypeFormComponent', () => {
  let component: ShippingTypeFormComponent;
  let fixture: ComponentFixture<ShippingTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
