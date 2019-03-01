import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessoresComponent } from './list-professores.component';

describe('ListProfessorComponent', () => {
  let component: ListProfessoresComponent;
  let fixture: ComponentFixture<ListProfessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProfessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
