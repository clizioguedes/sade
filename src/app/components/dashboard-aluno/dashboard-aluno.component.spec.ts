import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAlunoComponent } from './dashboard-aluno.component';

describe('DashboardAlunoComponent', () => {
  let component: DashboardAlunoComponent;
  let fixture: ComponentFixture<DashboardAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
