import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCompraModal } from './finalizar-compra-modal';

describe('FinalizarCompraModal', () => {
  let component: FinalizarCompraModal;
  let fixture: ComponentFixture<FinalizarCompraModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizarCompraModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarCompraModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
