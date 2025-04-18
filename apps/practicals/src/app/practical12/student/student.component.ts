import { Component } from '@angular/core';
import { StudentserviceService } from 'src/app/studentservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: any[] = [];

  constructor(private studentService: StudentserviceService) {
    this.students = this.studentService.getStudents();
  }
}
