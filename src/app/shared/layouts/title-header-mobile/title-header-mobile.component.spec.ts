import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHeaderMobileComponent } from './title-header-mobile.component';

describe('TitleHeaderMobileComponent', () => {
  let component: TitleHeaderMobileComponent;
  let fixture: ComponentFixture<TitleHeaderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleHeaderMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
