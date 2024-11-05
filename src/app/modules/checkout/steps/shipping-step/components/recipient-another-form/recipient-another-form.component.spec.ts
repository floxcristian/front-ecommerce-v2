import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAnotherFormComponent } from './recipient-another-form.component';

describe('RecipientAnotherFormComponent', () => {
  let component: RecipientAnotherFormComponent;
  let fixture: ComponentFixture<RecipientAnotherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientAnotherFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientAnotherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
