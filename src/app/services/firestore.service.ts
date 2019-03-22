import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Class, Matter, Teacher, Student, School } from '../models/Escola';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  classesCollection: AngularFirestoreCollection<Class>;
  classes: Observable<Class[]>;

  classDocument: AngularFirestoreDocument<Class>;
  class: Observable<Class>;

  subjectsCollection: AngularFirestoreCollection<Matter>;
  subjects: Observable<Matter[]>;

  subjectDocument: AngularFirestoreDocument<Matter>;
  subject: Observable<Matter>;

  studentsCollection: AngularFirestoreCollection<Student>;
  students: Observable<Student[]>;

  studentDocument: AngularFirestoreDocument<Student>;
  student: Observable<Student>;

  teachersCollection: AngularFirestoreCollection<Teacher>;
  teachers: Observable<Teacher[]>;

  teacherDocument: AngularFirestoreDocument<Teacher>;
  teacher: Observable<Teacher>;

  schoolsCollection: AngularFirestoreCollection<School>;
  schools: Observable<School[]>;

  schoolDocument: AngularFirestoreDocument<School>;
  school: Observable<School>;

  calendariosLetivosCollection: AngularFirestoreCollection<any>;
  calendarios: Observable<any[]>;

  anoLetivoDocument: AngularFirestoreDocument<any>;
  anoLetivo: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  // ESCOLAS
  getSchools() {
    this.schoolsCollection = this.firestore.collection('schools/');
    this.schools = this.schoolsCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as School;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.schools;
  }

  addSchool(school: School) {
    this.schoolsCollection.add(school);
  }

  getSchool(idSchool: any) {
    this.schoolDocument = this.firestore.doc(idSchool);
    this.school = this.schoolDocument.valueChanges();
    return this.school;
  }

  updateSchool(school: School) {
    this.schoolDocument.update(school);
  }

  deleteSchool(idSchool: string) {
    this.schoolDocument = this.schoolsCollection.doc(idSchool);
    this.schoolDocument.delete();
  }

  addIdSchool(idSchool: any) {
    this.schoolDocument.update({ id: idSchool });
    console.log('ID da ESCOLA foi Adicionado com Sucesso');
  }

  // CALENDARIOS LETIVOS
  getCalendariosLetivos() {
    this.calendariosLetivosCollection = this.schoolDocument.collection('calendarios');
    this.calendarios = this.calendariosLetivosCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.calendarios;
  }

  AddCalendarioLetivo(calendario: any) {
    this.calendariosLetivosCollection.add(calendario);
  }

  getCalendarioLetivo(idCalendarioLetivo: any) {
    this.anoLetivoDocument = this.schoolsCollection.doc(idCalendarioLetivo);
    this.anoLetivo = this.anoLetivoDocument.valueChanges();
    return this.anoLetivo;
  }

  updateCalendarioLetivo(calendario: School) {
    this.anoLetivoDocument.update(calendario);
  }

  deleteCalendarioLetivo(idCalendarioLetivo: string) {
    this.anoLetivoDocument = this.schoolsCollection.doc(idCalendarioLetivo);
    this.anoLetivoDocument.delete();
  }

  addIdCalendarioLetivo(idCalendarioLetivo: any) {
    this.anoLetivoDocument.update({ id: idCalendarioLetivo });
    console.log('ID do ANO LETIVO foi Adicionado com Sucesso');
  }

  // TURMAS
  getClasses() {
    this.classesCollection = this.anoLetivoDocument.collection('classes/');
    this.classes = this.classesCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Class;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.classes;
  }

  addClass(classe: Class) {
    this.anoLetivoDocument.collection('classes').add(classe);
  }

  getClass(idClass: any) {
    this.classDocument = this.anoLetivoDocument.collection('classes').doc(idClass);
    this.class = this.classDocument.valueChanges();
    return this.class;
  }

  updateClass(classe: any) {
    this.classDocument.update(classe);
  }

  deleteClass(id: string) {
    this.classDocument = this.classesCollection.doc(id);
    this.classDocument.delete();
  }

  addIdClass(idClass: any) {
    this.classDocument.update({ id: idClass });
    console.log('ID da TURMA foi Adicionado com Sucesso');
  }

  // DISCIPLINAS
  getSubjects() {
    this.subjectsCollection = this.classDocument.collection('subjects');
    this.subjects = this.subjectsCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Matter;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.subjects;
  }

  addSubject(subject: any) {
    this.subjectsCollection.add(subject);
  }

  getSubject(idSubject: string) {
    this.subjectDocument = this.subjectsCollection.doc(idSubject);
    this.subject = this.subjectDocument.valueChanges();
    return this.subject;
  }

  updateSubject(subject: any) {
    this.subjectDocument.update(subject);
  }

  deleteSubject(subject: any) {
    this.subjectDocument = this.subjectsCollection.doc(`${subject.id}`);
    this.subjectDocument.delete();
  }

  /*
  matricularAluno(idStudent: string, idClass: string) {
    this.firestore.doc('/alunos/' + idStudent).update(
      { idTurma: idClass, situacao: 'Matriculado', status: 'Cursando' }
    );
  }
  */

  // PROFESSORES
  getTeachers() {
    this.teachersCollection = this.firestore.collection('teachers/');
    this.teachers = this.teachersCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Teacher;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.teachers;
  }

  addTeacher(teacher: Teacher) {
    this.teachersCollection.add(teacher);
  }

  getTeacher(TeacherId: any) {
    this.teacherDocument = this.teachersCollection.doc(TeacherId);
    this.teacher = this.teacherDocument.valueChanges();
    return this.teacher;
  }

  updateTeacher(teacher: Teacher) {
    this.teacherDocument.update(teacher);
  }

  deleteTeacher(teacher: Teacher) {
    this.teacherDocument = this.teachersCollection.doc(`${teacher.id}`);
    this.teacherDocument.delete();
  }

  addIdTeacher(idTeacher: any) {
    this.teacherDocument.update({ id: idTeacher });
    console.log('ID do PROFESSOR foi Adicionado com Sucesso');
  }

  // ALUNOS
  getStudents() {
    this.studentsCollection = this.firestore.collection('students/', ref => ref.orderBy('nome'));
    this.students = this.studentsCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Student;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.students;
  }

  addStudent(student: any) {
    this.studentsCollection.add(student);
  }

  getStudent(studentId: any) {
    this.studentDocument = this.studentsCollection.doc(studentId);
    this.student = this.studentDocument.valueChanges();
    return this.student;
  }

  updateStudent(student: Student) {
    this.studentDocument.update(student);
  }

  deleteStudent(student: Student) {
    this.studentDocument = this.studentsCollection.doc(`${student.id}`);
    this.studentDocument.delete();
  }

  addIdStudent(idstudent: string) {
    this.studentDocument.update({ id: idstudent });
    console.log('ID do ALUNO foi Adicionado com Sucesso');
  }
}
