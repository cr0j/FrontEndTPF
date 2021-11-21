import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacientes2Component } from './pacientes2.component';

describe('Pacientes2Component', () => {
  let component: Pacientes2Component;
  let fixture: ComponentFixture<Pacientes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacientes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacientes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
