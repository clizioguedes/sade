import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Escola';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {

  id: any;
  teacher: Teacher;

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params.id;
    this.firestore.getTeacher(this.id).subscribe(teacher => {
      this.teacher = teacher;
      // CASO O ALUNO NÃO POSSUA ID
      if (this.teacher.id == null) {
        this.firestore.addIdTeacher(this.id);
      }
    });
  }

  ngOnInit() {
  }
}
