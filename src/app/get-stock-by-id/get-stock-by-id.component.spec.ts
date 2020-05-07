import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStockByIdComponent } from './get-stock-by-id.component';

describe('GetStockByIdComponent', () => {
  let component: GetStockByIdComponent;
  let fixture: ComponentFixture<GetStockByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStockByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStockByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
