import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientTypeFormComponent } from './recipient-type-form.component';

describe('RecipientTypeFormComponent', () => {
  let component: RecipientTypeFormComponent;
  let fixture: ComponentFixture<RecipientTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
