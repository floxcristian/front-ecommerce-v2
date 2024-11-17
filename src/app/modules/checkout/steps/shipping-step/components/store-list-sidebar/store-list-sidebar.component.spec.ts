import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListSidebarComponent } from './store-list-sidebar.component';

describe('StoreListSidebarComponent', () => {
  let component: StoreListSidebarComponent;
  let fixture: ComponentFixture<StoreListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreListSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
