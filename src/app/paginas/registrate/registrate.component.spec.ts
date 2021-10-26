import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrateComponent } from './registrate.component';

describe('RegistrateComponent', () => {
  let component: RegistrateComponent;
  let fixture: ComponentFixture<RegistrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
