import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurmasComponent } from './list-turmas.component';

describe('ListTurmaComponent', () => {
  let component: ListTurmasComponent;
  let fixture: ComponentFixture<ListTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
