import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from 'src/app/models/Escola';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  id: any;
  professor: Professor;

  constructor(
    private firestoreProfessor: ProfessorService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params.id;
    this.firestoreProfessor.getProfessor(this.id).subscribe(aluno => {
      this.professor = aluno;
      // CASO O ALUNO NÃO POSSUA ID
      if (this.professor.id == null) {
        this.firestoreProfessor.addId(this.id);
      }
    });
  }

  ngOnInit() {
  }
}
