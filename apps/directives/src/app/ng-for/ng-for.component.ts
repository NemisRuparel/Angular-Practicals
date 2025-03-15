import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  user=[
    {name:'Nemis',role:'student'},
    {name:'KVR Sir',role:'Lecturer'},
    {name:'JMP Madam',role:'HOD - Comp. Dept.'}
  ]
}
