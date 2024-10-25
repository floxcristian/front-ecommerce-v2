import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupPersonFormComponent } from './pickup-person-form.component';

describe('PickupPersonFormComponent', () => {
  let component: PickupPersonFormComponent;
  let fixture: ComponentFixture<PickupPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupPersonFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
