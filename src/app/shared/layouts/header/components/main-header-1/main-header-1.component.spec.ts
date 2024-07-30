import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeader1Component } from './main-header-1.component';

describe('MainHeader1Component', () => {
  let component: MainHeader1Component;
  let fixture: ComponentFixture<MainHeader1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeader1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
