import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Class, School } from 'src/app/models/Escola';
import { AddClassComponent } from '../../class/add-class/add-class.component';
import { EditSchoolComponent } from '../edit-school/edit-school.component';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {

  idEscola: string;
  escola: School;
  turmas: Class[];

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.idEscola = this.route.snapshot.params.id;
    this.firestore.getSchool(this.idEscola).subscribe(escola => {
      this.escola = escola;
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

  openDialogEditSchool(): void {
    const dialogRef = this.dialog.open(EditSchoolComponent, {
      data: this.escola
    });
  }
}
