import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentIdInputComponent } from './document-id-input.component';

describe('DocumentIdInputComponent', () => {
  let component: DocumentIdInputComponent;
  let fixture: ComponentFixture<DocumentIdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentIdInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentIdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
