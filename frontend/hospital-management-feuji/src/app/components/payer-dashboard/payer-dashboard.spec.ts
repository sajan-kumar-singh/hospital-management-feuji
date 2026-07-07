import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerDashboard } from './payer-dashboard';

describe('PayerDashboard', () => {
  let component: PayerDashboard;
  let fixture: ComponentFixture<PayerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayerDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(PayerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
