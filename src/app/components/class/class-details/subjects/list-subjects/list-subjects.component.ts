import { Component, OnInit } from '@angular/core';
import { Matter } from 'src/app/models/Escola';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss']
})
export class ListSubjectsComponent implements OnInit {

  disciplinas: Matter[];

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.firestore.getSubjects().subscribe( disciplinas => {
      this.disciplinas = disciplinas;
    });
  }
}
