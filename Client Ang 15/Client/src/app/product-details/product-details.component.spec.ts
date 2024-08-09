import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaislComponent } from './product-details.component';

describe('ProductDetaislComponent', () => {
  let component: ProductDetaislComponent;
  let fixture: ComponentFixture<ProductDetaislComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaislComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetaislComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
