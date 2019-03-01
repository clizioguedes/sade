import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Escola';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  id: any;
  aluno: Aluno;

  constructor(
    private firestoreAluno: AlunoService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params.id;
    this.firestoreAluno.getAluno(this.id).subscribe(aluno => {
      this.aluno = aluno;
      // CASO O ALUNO NÃO POSSUA ID
      if (this.aluno.id == null) {
        this.firestoreAluno.addId(this.id);
      }
    });
  }

  ngOnInit() {
  }
  /*
    addTurmaInAluno(idTurma: string) {
      if (idTurma == null) {
        alert('Turma Inválida');
      } else {
        this.firestoreAluno.addAlunoNaTurma(idTurma);
        alert('OK');
      }
    }
    */
}
