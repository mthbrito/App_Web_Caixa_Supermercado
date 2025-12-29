import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesCaixa } from './acoes-caixa';

describe('AcoesCaixa', () => {
  let component: AcoesCaixa;
  let fixture: ComponentFixture<AcoesCaixa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcoesCaixa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesCaixa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
