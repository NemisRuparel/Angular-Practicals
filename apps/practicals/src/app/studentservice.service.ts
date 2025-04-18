import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private students = [
    { id: 1, name: 'Aarav Patel', age: 18, department: 'Computer Engineering' },
    { id: 2, name: 'Radhav Maheta', age: 19, department: 'Information Technology' },
    { id: 3, name: 'Raj Joshi', age: 17, department: 'Electronics' }
  ];

  getStudents() {
    return this.students;
  }
}
