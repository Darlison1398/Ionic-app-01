import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDisciplinasPage } from './cadastro-disciplinas.page';

describe('CadastroDisciplinasPage', () => {
  let component: CadastroDisciplinasPage;
  let fixture: ComponentFixture<CadastroDisciplinasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroDisciplinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
