import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Aluno } from '../models/Escola';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  alunosCollection: AngularFirestoreCollection<Aluno>;
  alunos: Observable<Aluno[]>;

  alunoDocument: AngularFirestoreDocument<Aluno>;
  aluno: Observable<Aluno>;

  constructor(private firestore: AngularFirestore) { }

  getAlunos() {
    this.alunosCollection = this.firestore.collection('alunos/', ref => ref.orderBy('nome'));
    this.alunos = this.alunosCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Aluno;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.alunos;
  }

  getAlunosTurma(idTurma: string) {
    this.alunosCollection = this.firestore.collection('alunos/', ref => ref.where('turma', '==', idTurma));
    this.alunos = this.alunosCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Aluno;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
    return this.alunos;
  }

  addAluno(aluno: any) {
    this.firestore.collection('alunos').add(aluno);
  }

  getAluno(alunoId: any) {
    this.alunoDocument = this.firestore.doc('/alunos/' + alunoId);
    this.aluno = this.alunoDocument.valueChanges();
    return this.aluno;
  }

  updateAluno(aluno: Aluno) {
    this.alunoDocument.update(aluno);
  }

  deleteAluno(aluno: Aluno) {
    this.alunoDocument = this.alunosCollection.doc(`${aluno.id}`);
    this.alunoDocument.delete();
  }

  addId(idAluno: any) {
    this.alunoDocument.update({ id: idAluno });
    console.log('ID foi Adicionado com Sucesso');
  }

  /*
  addAlunoNaTurma(idTurma: string) {
    this.alunoDocument.update({ turma: idTurma, matriculado: true });
  }

  deleteAlunoNaTurma() {
    this.alunoDocument.update({ turma: null, status: false });
  }

  addNotaB1(id: any, n1: number, n2: number, n3: number) {
    this.alunoDocument = this.alunosCollection.doc(id);
    let media: number = (n1 + n2 + n3) / 3;
    media = parseFloat(media.toFixed(1));
    this.alunoDocument.update({ b1: { nota1: n1, nota2: n2, nota3: n3, media: media } });
    console.log(this.alunoDocument);
  }

  addNotaB2(id: any, n1: number, n2: number, n3: number) {
    this.alunoDocument = this.alunosCollection.doc(id);
    let media: number = (n1 + n2 + n3) / 3;
    media = parseFloat(media.toFixed(1));
    this.alunoDocument.update({ b2: { nota1: n1, nota2: n2, nota3: n3, media: media } });
    console.log(this.alunoDocument);
  }

  addNotaB3(id: any, n1: number, n2: number, n3: number) {
    this.alunoDocument = this.alunosCollection.doc(id);
    let media: number = (n1 + n2 + n3) / 3;
    media = parseFloat(media.toFixed(1));
    this.alunoDocument.update({ b3: { nota1: n1, nota2: n2, nota3: n3, media: media } });
    console.log(this.alunoDocument);
  }

  addNotaB4(id: any, n1: number, n2: number, n3: number) {
    this.alunoDocument = this.alunosCollection.doc(id);
    let media: number = (n1 + n2 + n3) / 3;
    media = parseFloat(media.toFixed(1));
    this.alunoDocument.update({ b4: { nota1: n1, nota2: n2, nota3: n3, media: media } });
    console.log(this.alunoDocument);
  }

  addFalta(id: any, falta: Faltas) {
    this.alunosCollection.doc(id).collection('faltas/').add(falta);
  }
  */
}
