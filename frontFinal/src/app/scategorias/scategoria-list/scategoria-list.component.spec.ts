import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sCategoriaListComponent } from './scategoria-list.component';

describe('sCategoriaListComponent', () => {
  let component: sCategoriaListComponent;
  let fixture: ComponentFixture<sCategoriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sCategoriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sCategoriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
