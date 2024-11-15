import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDateSidebarComponent } from './group-date-sidebar.component';

describe('GroupDateSidebarComponent', () => {
  let component: GroupDateSidebarComponent;
  let fixture: ComponentFixture<GroupDateSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupDateSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
