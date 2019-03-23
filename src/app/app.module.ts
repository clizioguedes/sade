import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';
// import { FlexLayoutModule } from '@angular/flex-layout';
//
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
//
import { FirestoreService } from './services/firestore.service';
//
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { ListStudentsComponent } from './components/student/list-students/list-students.component';
//
import { EditTeacherComponent } from './components/teacher/edit-teacher/edit-teacher.component';
import { AddTeacherComponent } from './components/teacher/add-teacher/add-teacher.component';
import { ListTeachersComponent } from './components/teacher/list-teachers/list-teachers.component';
import { TeacherDetailsComponent } from './components/teacher/teacher-details/teacher-details.component';
//
import { SchoolDetailsComponent } from './components/school/school-details/school-details.component';
import { ListSchoolsComponent } from './components/school/list-schools/list-schools.component';
import { AddSchoolComponent } from './components/school/add-school/add-school.component';
import { EditSchoolComponent } from './components/school/edit-school/edit-school.component';
//
import { EditClassComponent } from './components/school/school-details/class/edit-class/edit-class.component';
import { AddClassComponent } from './components/school/school-details/class/add-class/add-class.component';
import { ListClassesComponent } from './components/school/school-details/class/list-classes/list-classes.component';
import { ClassDetailsComponent } from './components/school/school-details/class/class-details/class-details.component';
//
import { AddSubjectComponent } from './components/school/school-details/class/class-details/subjects/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/school/school-details/class/class-details/subjects/edit-subject/edit-subject.component';
// tslint:disable-next-line:max-line-length
import { SubjectDetailsComponent } from './components/school/school-details/class/class-details/subjects/subject-details/subject-details.component';
// tslint:disable-next-line:max-line-length
import { ListSubjectsComponent } from './components/school/school-details/class/class-details/subjects/list-subjects/list-subjects.component';
import { IndexComponent } from './components/index/index.component';
import { DialogCadastroOkComponent } from './components/school/add-school/dialog-cadastro-ok/dialog-cadastro-ok.component';
//
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    //
    AddStudentComponent,
    EditStudentComponent,
    StudentDetailsComponent,
    ListStudentsComponent,
    //
    EditTeacherComponent,
    AddTeacherComponent,
    ListTeachersComponent,
    TeacherDetailsComponent,
    //
    SchoolDetailsComponent,
    ListSchoolsComponent,
    AddSchoolComponent,
    EditSchoolComponent,
    //
    EditClassComponent,
    AddClassComponent,
    ListClassesComponent,
    ClassDetailsComponent,
    //
    AddSubjectComponent,
    EditSubjectComponent,
    SubjectDetailsComponent,
    ListSubjectsComponent,
    IndexComponent,
    DialogCadastroOkComponent,
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
    // FlexLayoutModule,
  ],
  providers: [
    FirestoreService,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogCadastroOkComponent, // Alert de Cadastro de escola realizado com Sucesso.
  ]
})
export class AppModule { }
