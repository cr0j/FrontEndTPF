import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sCategoriaEditComponent } from './scategoria-edit.component';

describe('sCategoriaEditComponent', () => {
  let component: sCategoriaEditComponent;
  let fixture: ComponentFixture<sCategoriaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sCategoriaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sCategoriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
