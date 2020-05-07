import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStockDetailsComponent } from './get-all-stock-details.component';

describe('GetAllStockDetailsComponent', () => {
  let component: GetAllStockDetailsComponent;
  let fixture: ComponentFixture<GetAllStockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllStockDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllStockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
