import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCosseguroComponent } from './card-cosseguro.component';

describe('CardCosseguroComponent', () => {
  let component: CardCosseguroComponent;
  let fixture: ComponentFixture<CardCosseguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCosseguroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCosseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
