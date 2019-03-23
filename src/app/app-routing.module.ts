import { NgModule } from '@angular/core';
//
import { Routes, RouterModule } from '@angular/router';
//
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
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
//
import { EditClassComponent } from './components/class/edit-class/edit-class.component';
import { AddClassComponent } from './components/class/add-class/add-class.component';
// tslint:disable-next-line:max-line-length
import { ListClassesComponent } from './components/class/list-classes/list-classes.component';
// tslint:disable-next-line:max-line-length
import { ClassDetailsComponent } from './components/class/class-details/class-details.component';
//
// tslint:disable-next-line:max-line-length
import { AddSubjectComponent } from './components/class/class-details/subjects/add-subject/add-subject.component';
// tslint:disable-next-line:max-line-length
import { EditSubjectComponent } from './components/class/class-details/subjects/edit-subject/edit-subject.component';
// tslint:disable-next-line:max-line-length
import { SubjectDetailsComponent } from './components/class/class-details/subjects/subject-details/subject-details.component';
// tslint:disable-next-line:max-line-length
import { ListSubjectsComponent } from './components/class/class-details/subjects/list-subjects/list-subjects.component';
//
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  //
  { path: 'add-school', component: AddSchoolComponent },
  { path: 'list-schools', component: ListSchoolsComponent },
  { path: 'edit-school/:id', component: EditSchoolComponent },
  { path: 'school-details/:id', component: SchoolDetailsComponent },
  //
  { path: 'add-class', component: AddClassComponent },
  { path: 'list-classes', component: ListClassesComponent },
  { path: 'edit-class/:id', component: EditClassComponent },
  { path: 'class-details/:id', component: ClassDetailsComponent },
  //
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-students', component: ListStudentsComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  //
  /*
  { path: 'turma/:id/disciplina/:id', component: DisciplinaComponent },
  { path: 'add-disciplina', component: AddDisciplinaComponent },
  { path: 'turma/:id/edit-disciplina/:id', component: EditDisciplinaComponent },
  */
  //
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'list-teachers', component: ListTeachersComponent },
  { path: 'edit-teacher/:id', component: EditTeacherComponent },
  { path: 'teacher/:id', component: TeacherDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
