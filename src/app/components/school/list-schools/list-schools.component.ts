import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { School } from 'src/app/models/Escola';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.scss']
})
export class ListSchoolsComponent implements OnInit {

  escolas: Array<School>;

  constructor(
    private firestore: FirestoreService) {
      this.firestore.getSchools().subscribe( escolas => {
        this.escolas = escolas;
      });
    }

  ngOnInit() {
  }

}
