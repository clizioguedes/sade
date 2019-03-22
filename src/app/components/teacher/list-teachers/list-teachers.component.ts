import { Component, OnInit, ViewChild } from '@angular/core';
import { Teacher } from 'src/app/models/Escola';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FirestoreService } from 'src/app/Services/firestore.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.scss']
})
export class ListTeachersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  teachers: Array<any>;
  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento'];
  dataSource: MatTableDataSource<Teacher>;

  constructor(
    private firestore: FirestoreService,
  ) {
    this.firestore.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
      this.dataSource = new MatTableDataSource(this.teachers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
