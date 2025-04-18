import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../student.service';
@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data.splice(0,1);
    });
  }
}
