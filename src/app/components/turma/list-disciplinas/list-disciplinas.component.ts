import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina } from 'src/app/models/Escola';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-disciplinas',
  templateUrl: './list-disciplinas.component.html',
  styleUrls: ['./list-disciplinas.component.scss']
})
export class ListDisciplinasComponent implements OnInit {

  disciplinas: Disciplina[];

  constructor(private firestoreDisciplina: DisciplinaService, private route: ActivatedRoute) { }
  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firestoreDisciplina.getDisciplinas(this.id).subscribe( disciplinas => {
      this.disciplinas = disciplinas;
    });
  }
}
