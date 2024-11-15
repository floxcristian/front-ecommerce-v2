import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDateSidebar2Component } from './group-date-sidebar-2.component';

describe('GroupDateSidebar2Component', () => {
  let component: GroupDateSidebar2Component;
  let fixture: ComponentFixture<GroupDateSidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupDateSidebar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDateSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
