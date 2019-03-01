import { NgModule } from '@angular/core';
//
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
//
import { AddAlunoComponent } from './components/add-aluno/add-aluno.component';
import { ListAlunosComponent } from './components/list-alunos/list-alunos.component';
import { EditAlunoComponent } from './components/edit-aluno/edit-aluno.component';
import { AlunoComponent } from './components/aluno/aluno.component';
//
import { AddTurmaComponent } from './components/add-turma/add-turma.component';
import { ListTurmasComponent } from './components/list-turmas/list-turmas.component';
import { EditTurmaComponent } from './components/edit-turma/edit-turma.component';
import { TurmaComponent } from './components/turma/turma.component';
//
import { AddDisciplinaComponent } from './components/turma/add-disciplina/add-disciplina.component';
import { ListDisciplinasComponent } from './components/turma/list-disciplinas/list-disciplinas.component';
import { EditDisciplinaComponent } from './components/turma/edit-disciplina/edit-disciplina.component';
import { DisciplinaComponent } from './components/turma/disciplina/disciplina.component';
//
import { AddProfessorComponent } from './components/add-professor/add-professor.component';
import { ListProfessoresComponent } from './components/list-professores/list-professores.component';
import { EditProfessorComponent } from './components/edit-professor/edit-professor.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { DashboardAlunoComponent } from './components/dashboard-aluno/dashboard-aluno.component';
import { DashboardTurmaComponent } from './components/dashboard-turma/dashboard-turma.component';
import { DashboardProfessorComponent } from './components/dashboard-professor/dashboard-professor.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  //
  { path: 'dashboard-aluno', component: DashboardAlunoComponent },
  { path: 'add-aluno', component: AddAlunoComponent },
  { path: 'list-alunos', component: ListAlunosComponent },
  { path: 'edit-aluno/:id', component: EditAlunoComponent },
  { path: 'aluno/:id', component: AlunoComponent },
  //
  { path: 'dashboard-turma', component: DashboardTurmaComponent },
  { path: 'add-turma', component: AddTurmaComponent },
  { path: 'list-turmas', component: ListTurmasComponent },
  { path: 'edit-turma/:id', component: EditTurmaComponent },
  { path: 'turma/:id', component: TurmaComponent },
  //
  { path: 'turma/:id/disciplina/:id', component: DisciplinaComponent },
  { path: 'add-disciplina', component: AddDisciplinaComponent },
  { path: 'turma/:id/edit-disciplina/:id', component: EditDisciplinaComponent },
  //
  { path: 'dashboard-professor', component: DashboardProfessorComponent },
  { path: 'add-professor', component: AddProfessorComponent },
  { path: 'list-professores', component: ListProfessoresComponent },
  { path: 'edit-professor/:id', component: EditProfessorComponent },
  { path: 'professor/:id', component: ProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
