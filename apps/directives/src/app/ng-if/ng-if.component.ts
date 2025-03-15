import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
    back = false;
    me = 'Nemis Ruparel';
    click = false;
    Back(){
      this.back=false;
    }
    login(){
      this.back=true;
    }
}
