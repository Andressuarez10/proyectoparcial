import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina8Component } from './pagina8.component';

describe('Pagina8Component', () => {
  let component: Pagina8Component;
  let fixture: ComponentFixture<Pagina8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
