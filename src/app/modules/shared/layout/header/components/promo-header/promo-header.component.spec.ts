import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoHeaderComponent } from './promo-header.component';

describe('PromoHeaderComponent', () => {
  let component: PromoHeaderComponent;
  let fixture: ComponentFixture<PromoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
