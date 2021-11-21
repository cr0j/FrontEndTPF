import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sCategoriaAddComponent } from './scategoria-add.component';

describe('CategoriaAddComponent', () => {
  let component: sCategoriaAddComponent;
  let fixture: ComponentFixture<sCategoriaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sCategoriaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sCategoriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
