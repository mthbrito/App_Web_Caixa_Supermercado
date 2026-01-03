import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemToast } from './mensagem-toast';

describe('MensagemToast', () => {
  let component: MensagemToast;
  let fixture: ComponentFixture<MensagemToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagemToast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemToast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
