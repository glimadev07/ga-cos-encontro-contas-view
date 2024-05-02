import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecoesMonetariasPrevistaComponent } from './correcoes-monetarias-prevista.component';

describe('CorrecoesMonetariasPrevistaComponent', () => {
  let component: CorrecoesMonetariasPrevistaComponent;
  let fixture: ComponentFixture<CorrecoesMonetariasPrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrecoesMonetariasPrevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecoesMonetariasPrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
