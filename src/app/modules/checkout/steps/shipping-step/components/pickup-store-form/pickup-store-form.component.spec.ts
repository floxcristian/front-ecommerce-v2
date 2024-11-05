import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupStoreFormComponent } from './pickup-store-form.component';

describe('PickupStoreFormComponent', () => {
  let component: PickupStoreFormComponent;
  let fixture: ComponentFixture<PickupStoreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupStoreFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupStoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
