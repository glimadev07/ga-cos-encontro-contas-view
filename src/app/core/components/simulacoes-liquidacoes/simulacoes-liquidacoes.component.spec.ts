import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacoesLiquidacoesComponent } from './simulacoes-liquidacoes.component';

describe('SimulacoesLiquidacoesComponent', () => {
  let component: SimulacoesLiquidacoesComponent;
  let fixture: ComponentFixture<SimulacoesLiquidacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacoesLiquidacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacoesLiquidacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
