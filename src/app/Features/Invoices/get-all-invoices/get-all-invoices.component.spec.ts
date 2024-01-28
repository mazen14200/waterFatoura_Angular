import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllInvoicesComponent } from './get-all-invoices.component';

describe('GetAllInvoicesComponent', () => {
  let component: GetAllInvoicesComponent;
  let fixture: ComponentFixture<GetAllInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllInvoicesComponent]
    });
    fixture = TestBed.createComponent(GetAllInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
