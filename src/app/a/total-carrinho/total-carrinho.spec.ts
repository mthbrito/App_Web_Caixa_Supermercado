import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCarrinho } from './total-carrinho';

describe('TotalCarrinho', () => {
  let component: TotalCarrinho;
  let fixture: ComponentFixture<TotalCarrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCarrinho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCarrinho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
