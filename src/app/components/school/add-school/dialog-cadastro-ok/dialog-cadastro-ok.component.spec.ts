import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCadastroOkComponent } from './dialog-cadastro-ok.component';

describe('DialogCadastroOkComponent', () => {
  let component: DialogCadastroOkComponent;
  let fixture: ComponentFixture<DialogCadastroOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCadastroOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCadastroOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
