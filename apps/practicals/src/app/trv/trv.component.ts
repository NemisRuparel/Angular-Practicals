import { Component } from '@angular/core';

@Component({
  selector: 'app-trv',
  templateUrl: './trv.component.html',
  styleUrls: ['./trv.component.css']
})
export class TrvComponent {
  students: { id: number; name: string }[] = [];
  nextId: number = 1;

  addStudent(studentInput: HTMLInputElement) {
    const name = studentInput.value;
    if (name) {
      this.students.push({
        id: this.nextId++,
        name: name
      });
      studentInput.value = ''; 
    }
  }

  removeStudent(id: number) {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}