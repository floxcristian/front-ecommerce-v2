import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterSidebarComponent } from './cost-center-sidebar.component';

describe('CostCenterSidebarComponent', () => {
  let component: CostCenterSidebarComponent;
  let fixture: ComponentFixture<CostCenterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCenterSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCenterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
