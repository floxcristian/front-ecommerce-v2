import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAddressFormComponent } from './invoice-address-form.component';

describe('InvoiceAddressFormComponent', () => {
  let component: InvoiceAddressFormComponent;
  let fixture: ComponentFixture<InvoiceAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceAddressFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
