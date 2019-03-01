import { Component, OnInit } from '@angular/core';
import { Disciplina, Turma } from 'src/app/models/Escola';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent implements OnInit {

  disciplina: Disciplina;
  id: string;
  turma: Turma;
  idTurma: string;
  constructor(private firestoreDisciplina: DisciplinaService, private firestoreTurma: TurmaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firestoreDisciplina.getDisciplina(this.id).subscribe(disciplina => {
      this.disciplina = disciplina;
      /*
      if (this.disciplina.id == null) {
        this.disciplina.addId(this.id);
      }
      */
    });
  }

}
