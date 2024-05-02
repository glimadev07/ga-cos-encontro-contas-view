import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacoesModalComponent } from './simulacoes-modal.component';

describe('SimulacoesModalComponent', () => {
  let component: SimulacoesModalComponent;
  let fixture: ComponentFixture<SimulacoesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacoesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacoesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
