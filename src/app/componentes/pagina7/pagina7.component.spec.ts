import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina7Component } from './pagina7.component';

describe('Pagina7Component', () => {
  let component: Pagina7Component;
  let fixture: ComponentFixture<Pagina7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
