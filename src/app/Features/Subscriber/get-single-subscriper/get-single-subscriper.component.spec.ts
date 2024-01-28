import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleSubscriperComponent } from './get-single-subscriper.component';

describe('GetSingleSubscriperComponent', () => {
  let component: GetSingleSubscriperComponent;
  let fixture: ComponentFixture<GetSingleSubscriperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSingleSubscriperComponent]
    });
    fixture = TestBed.createComponent(GetSingleSubscriperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
