import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Student {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { city: string; street: string; suite: string };
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
  