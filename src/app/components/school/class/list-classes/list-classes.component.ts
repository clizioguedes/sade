import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss']
})
export class ListClassesComponent implements OnInit {

  turmas: any;
  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.firestore.getClasses().subscribe(turmas => {
      this.turmas = turmas;
    });
  }

  customTrackBy(index: number, ordem: any): any {
    return index;
  }

  deleteTurma(event: any) {
    const id: string = event.target.offsetParent.id;
    this.firestore.deleteClass(id);
  }
}
