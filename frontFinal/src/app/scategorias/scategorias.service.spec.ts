import { TestBed } from '@angular/core/testing';

import { sCategoriasService } from './scategorias.service';

describe('sCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: sCategoriasService = TestBed.get(sCategoriasService);
    expect(service).toBeTruthy();
  });
});
