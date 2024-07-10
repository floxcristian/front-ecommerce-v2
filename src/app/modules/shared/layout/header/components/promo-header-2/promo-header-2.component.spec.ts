import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoHeader2Component } from './promo-header-2.component';

describe('PromoHeader2Component', () => {
  let component: PromoHeader2Component;
  let fixture: ComponentFixture<PromoHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoHeader2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
