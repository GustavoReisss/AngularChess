import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaItensComponent } from './tabela-itens.component';

describe('TabelaItensComponent', () => {
  let component: TabelaItensComponent;
  let fixture: ComponentFixture<TabelaItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
