import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoCaixa } from './cabecalho-caixa';

describe('CabecalhoCaixa', () => {
  let component: CabecalhoCaixa;
  let fixture: ComponentFixture<CabecalhoCaixa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoCaixa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoCaixa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
