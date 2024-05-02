import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesOperacaoComponent } from './detalhes-operacao.component';

describe('DetalhesOperacaoComponent', () => {
  let component: DetalhesOperacaoComponent;
  let fixture: ComponentFixture<DetalhesOperacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesOperacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
