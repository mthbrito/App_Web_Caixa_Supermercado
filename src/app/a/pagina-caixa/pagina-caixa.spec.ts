import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCaixa } from './pagina-caixa';

describe('PaginaCaixa', () => {
  let component: PaginaCaixa;
  let fixture: ComponentFixture<PaginaCaixa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCaixa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCaixa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
