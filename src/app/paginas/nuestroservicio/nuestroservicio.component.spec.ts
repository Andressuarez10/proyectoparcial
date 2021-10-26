import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroservicioComponent } from './nuestroservicio.component';

describe('NuestroservicioComponent', () => {
  let component: NuestroservicioComponent;
  let fixture: ComponentFixture<NuestroservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
