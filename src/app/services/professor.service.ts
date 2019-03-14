import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Professor } from '../models/Escola';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professoresCollection: AngularFirestoreCollection<Professor>;
  professores: Observable<Professor[]>;

  professorDocument: AngularFirestoreDocument<Professor>;
  professor: Observable<Professor>;

  constructor(private firestore: AngularFirestore) { }

  getProfessores() {
    this.professoresCollection = this.firestore.collection('professores/');
    this.professores = this.professoresCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Professor;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.professores;
  }

  addProfessor(professor: Professor) {
    this.firestore.collection<Professor>('professores').add(professor);
  }

  getProfessor(professorId: any) {
    this.professorDocument = this.firestore.doc('/professores/' + professorId);
    this.professor = this.professorDocument.valueChanges();
    return this.professor;
  }

  updateProfessor(professor: Professor) {
    this.professorDocument.update(professor);
  }

  deleteProfessor(professor: Professor) {
    this.professorDocument = this.professoresCollection.doc(`${professor.id}`);
    this.professorDocument.delete();
  }

  addId(idProfessor: any) {
    this.professorDocument.update({ id: idProfessor });
    console.log('ID do Professor foi Adicionado com Sucesso');
  }
}
