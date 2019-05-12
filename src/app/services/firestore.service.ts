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

  studentsClassCollection: AngularFirestoreCollection<Student>;
  studentsClass: Observable<Student[]>;

  studentClassDocument: AngularFirestoreDocument<Student>;
  studentClass: Observable<Student>;

  teachersCollection: AngularFirestoreCollection<Teacher>;
  teachers: Observable<Teacher[]>;

  teacherDocument: AngularFirestoreDocument<Teacher>;
  teacher: Observable<Teacher>;

  schoolsCollection: AngularFirestoreCollection<School>;
  schools: Observable<School[]>;

  schoolDocument: AngularFirestoreDocument<School>;
  school: Observable<School>;

  historicosCollection: AngularFirestoreCollection<any>;
  historicos: Observable<any[]>;

  historicoDocument: AngularFirestoreDocument<any>;
  historico: Observable<any>;

  constructor(private firestore: AngularFirestore) { }

  // ESCOLAS
  getSchools() {
    this.schoolsCollection = this.firestore.collection('schools');
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

  addSchool(id: string, school: School) {
    this.schoolsCollection.doc(id).set(school);
  }

  getSchool(idSchool: string) {
    this.schoolDocument = this.firestore.collection<School>('schools').doc(idSchool);
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

  // TURMAS
  getClasses() {
    this.classesCollection = this.schoolDocument.collection('classes/');
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
    this.schoolDocument.collection('classes').add(classe);
  }

  getClass(idClass: string) {
    this.classDocument = this.classesCollection.doc<Class>(idClass);
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

  // DISCIPLINAS
  getSubjects(idTurma: any) {
    this.subjectsCollection = this.classDocument.collection('subjects', ref => ref.where('idTurma', '==', idTurma));
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
    this.classDocument.collection('subjects').add(subject);
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

  // PROFESSORES
  getTeachers() {
    this.teachersCollection = this.firestore.collection('professores/');
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
    this.teacherDocument = this.firestore.collection('professores/').doc(TeacherId);
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

  // ALUNOS
  getStudents() {
    this.studentsCollection = this.firestore.collection('alunos');
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

  getStudentsNoMatriculados() {
    this.studentsCollection = this.firestore.collection('alunos/', ref => ref.where('idTurma', '==', null).orderBy('nome'));
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

  getStudentsClass() {
    this.studentsClassCollection = this.classDocument.collection('matriculados');
    this.studentsClass = this.studentsClassCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.studentsClass;
  }

  addStudent(id: string, student: any) {
    this.firestore.collection('alunos').doc(id).set(student);
  }

  getStudent(studentId: any) {
    this.studentDocument = this.firestore.collection('alunos').doc(studentId);
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

  // FUNCOES ADMINISTRATIVAS
  matriculaAluno(idAluno: string, idTurmaAtual: string, matricula: any): void {
    this.classDocument.collection('matriculados').add(matricula);
    this.firestore.collection('alunos').doc(idAluno).collection('historicos').add(matricula);
    this.firestore.collection('alunos').doc(idAluno).update({ idTurma: idTurmaAtual });
  }

  cancelaMatricula(docMatriculaId: string, idAluno: string) {
    this.classDocument.collection('matriculados').doc(docMatriculaId).delete();
    this.studentDocument = this.firestore.collection('alunos').doc(idAluno);
    this.studentDocument.update({ idTurma: null });
  }

  cadastrarFrequencia(matricula: string, diario: any) {
    this.classDocument.collection('matriculados').doc(matricula).collection('frequencia').add(diario);
  }

  cadastrarNota(matricula: string, diario: any) {
    this.classDocument.collection('matriculados').doc(matricula).collection('frequencia').add(diario);
  }

  /*
  getHistoricos() {
    this.historicosCollection = this.studentDocument.collection('historicos');
    this.historicos = this.historicosCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.historicos;
  }

  getHistorico(historicoId: any) {
    this.historicoDocument = this.historicosCollection.doc(historicoId);
    this.historico = this.historicoDocument.valueChanges();
    return this.historico;
  }
  */

  cadastrarAusencia(alunoId: string, historicoId: string, diario: any) {
    this.firestore.collection('alunos').doc(alunoId).collection('historicos').doc(historicoId).collection('diarios').add(diario);
  }
}
