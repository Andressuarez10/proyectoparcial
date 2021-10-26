import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendatucitaComponent } from './agendatucita.component';

describe('AgendatucitaComponent', () => {
  let component: AgendatucitaComponent;
  let fixture: ComponentFixture<AgendatucitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendatucitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendatucitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
