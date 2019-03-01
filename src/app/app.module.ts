import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
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
//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
//
import { AlunoService } from './services/aluno.service';
import { DisciplinaService } from './services/disciplina.service';
import { ProfessorService } from './services/professor.service';
import { TurmaService } from './services/turma.service';
//
import { DashboardTurmaComponent } from './components/dashboard-turma/dashboard-turma.component';
import { DashboardAlunoComponent } from './components/dashboard-aluno/dashboard-aluno.component';
import { DashboardProfessorComponent } from './components/dashboard-professor/dashboard-professor.component';
//
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AddAlunoComponent,
    ListAlunosComponent,
    EditAlunoComponent,
    AlunoComponent,
    AddTurmaComponent,
    ListTurmasComponent,
    EditTurmaComponent,
    TurmaComponent,
    AddDisciplinaComponent,
    ListDisciplinasComponent,
    EditDisciplinaComponent,
    DisciplinaComponent,
    AddProfessorComponent,
    ListProfessoresComponent,
    EditProfessorComponent,
    ProfessorComponent,
    DashboardTurmaComponent,
    DashboardAlunoComponent,
    DashboardProfessorComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    AlunoService,
    TurmaService,
    ProfessorService,
    DisciplinaService,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent, AddDisciplinaComponent]
})
export class AppModule { }
