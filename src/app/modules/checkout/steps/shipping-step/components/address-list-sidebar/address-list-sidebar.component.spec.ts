import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListSidebarComponent } from './address-list-sidebar.component';

describe('AddressListSidebarComponent', () => {
  let component: AddressListSidebarComponent;
  let fixture: ComponentFixture<AddressListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressListSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
