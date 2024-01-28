import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubscriberComponent } from './add-new-subscriber.component';

describe('AddNewSubscriberComponent', () => {
  let component: AddNewSubscriberComponent;
  let fixture: ComponentFixture<AddNewSubscriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewSubscriberComponent]
    });
    fixture = TestBed.createComponent(AddNewSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
