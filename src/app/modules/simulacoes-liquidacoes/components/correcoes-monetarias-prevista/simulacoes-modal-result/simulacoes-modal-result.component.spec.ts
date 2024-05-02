import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacoesModalResultComponent } from './simulacoes-modal-result.component';

describe('SimulacoesModalResultComponent', () => {
  let component: SimulacoesModalResultComponent;
  let fixture: ComponentFixture<SimulacoesModalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacoesModalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacoesModalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
