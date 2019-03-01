import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Turma } from '../models/Escola';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  turmasCollection: AngularFirestoreCollection<Turma>;
  turmas: Observable<Turma[]>;

  turmaDocument: AngularFirestoreDocument<Turma>;
  turma: Observable<Turma>;

  constructor(private firestore: AngularFirestore) { }

  getTurmas() {
    this.turmasCollection = this.firestore.collection('turmas/');
    this.turmas = this.turmasCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Turma;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.turmas;
  }

  addTurma(turma: Turma) {
    this.firestore.collection<Turma>('turmas').add(turma);
  }

  getTurma(turmaId: any) {
    this.turmaDocument = this.firestore.doc('/turmas/' + turmaId);
    this.turma = this.turmaDocument.valueChanges();
    return this.turma;
  }

  updateTurma(turma: Turma) {
    this.turmaDocument.update(turma);
  }

  deleteTurma(id: string) {
    this.turmaDocument = this.turmasCollection.doc(id);
    this.turmaDocument.delete();
  }

  addId(idTurma: any) {
    this.turmaDocument.update({ id: idTurma });
    console.log('ID foi Adicionado com Sucesso');
  }
}
