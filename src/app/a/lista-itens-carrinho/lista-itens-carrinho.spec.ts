import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItensCarrinho } from './lista-itens-carrinho';

describe('ListaItensCarrinho', () => {
  let component: ListaItensCarrinho;
  let fixture: ComponentFixture<ListaItensCarrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaItensCarrinho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaItensCarrinho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
