import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/models/Escola';
import { AddClassComponent } from '../../class/add-class/add-class.component';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {

  idEscola: string;
  escola: any;
  turmas: any;

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.idEscola = this.route.snapshot.params.id;
    this.firestore.getSchool(this.idEscola).subscribe(escola => {
      this.escola = escola;
      if (this.escola.id == null) {
        this.firestore.addIdSchool(this.idEscola);
      }
    });
  }

  ngOnInit() {
    this.firestore.getClasses().subscribe(turmas => {
      this.turmas = turmas;
    });
  }

  openDialogAddClass(): void {
    const dialogRef = this.dialog.open(AddClassComponent, {
      data: this.escola
    });
  }
}
