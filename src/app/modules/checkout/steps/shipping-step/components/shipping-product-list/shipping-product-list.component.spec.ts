import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingProductListComponent } from './shipping-product-list.component';

describe('ShippingProductListComponent', () => {
  let component: ShippingProductListComponent;
  let fixture: ComponentFixture<ShippingProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
