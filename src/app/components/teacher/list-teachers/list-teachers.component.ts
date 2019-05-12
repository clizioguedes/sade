import { Component, OnInit, ViewChild } from '@angular/core';
import { Teacher } from '../../../models/Escola';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.scss']
})
export class ListTeachersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
