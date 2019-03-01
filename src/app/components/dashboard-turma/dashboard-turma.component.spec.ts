import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTurmaComponent } from './dashboard-turma.component';

describe('DashboardTurmaComponent', () => {
  let component: DashboardTurmaComponent;
  let fixture: ComponentFixture<DashboardTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
