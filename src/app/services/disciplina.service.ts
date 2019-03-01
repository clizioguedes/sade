import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Disciplina } from '../models/Escola';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  disciplinasCollection: AngularFirestoreCollection<Disciplina>;
  disciplinas: Observable<Disciplina[]>;

  disciplinaDocument: AngularFirestoreDocument<Disciplina>;
  disciplina: Observable<Disciplina>;

  constructor(private firestore: AngularFirestore) { }

  getDisciplinas(id: any) {
    this.disciplinasCollection = this.firestore.collection(`turmas/${id}/disciplinas/`);
    this.disciplinas = this. disciplinasCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Disciplina;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.disciplinas;
  }

  addDisciplina(idTurma: any, disciplina: any) {
    this.firestore.collection<Disciplina>('/turmas/' + idTurma + '/disciplinas').add(disciplina);
  }

  getDisciplina(disciplinaId: any) {
    this.disciplinaDocument = this.firestore.doc('/disciplinas/' + disciplinaId);
    this.disciplina = this.disciplinaDocument.valueChanges();
    return this.disciplina;
  }

  updateDisciplina(disciplina: Disciplina) {
    this.disciplinaDocument.update(disciplina);
  }

  deleteDisciplina(disciplina: Disciplina) {
    this.disciplinaDocument = this. disciplinasCollection.doc(`${disciplina.id}`);
    this.disciplinaDocument.delete();
  }
}
