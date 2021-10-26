import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroequipoComponent } from './nuestroequipo.component';

describe('NuestroequipoComponent', () => {
  let component: NuestroequipoComponent;
  let fixture: ComponentFixture<NuestroequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
