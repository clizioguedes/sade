import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.scss']
})
export class ListTurmasComponent implements OnInit {

  turmas: any;
  constructor(private firestore: TurmaService) { }

  ngOnInit() {
    this.firestore.getTurmas().subscribe(turmas => {
      this.turmas = turmas;
    });
  }

  customTrackBy(index: number, ordem: any): any {
    return index;
  }

  deleteTurma(event: any) {
    const id: string = event.target.offsetParent.id;
    this.firestore.deleteTurma(id);
  }
}
