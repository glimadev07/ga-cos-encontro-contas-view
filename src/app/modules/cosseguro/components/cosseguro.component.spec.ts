import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosseguroComponent } from './cosseguro.component';

describe('CosseguroComponent', () => {
  let component: CosseguroComponent;
  let fixture: ComponentFixture<CosseguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosseguroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
