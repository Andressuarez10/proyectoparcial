import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encuestacovid19Component } from './encuestacovid19.component';

describe('Encuestacovid19Component', () => {
  let component: Encuestacovid19Component;
  let fixture: ComponentFixture<Encuestacovid19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encuestacovid19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Encuestacovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
