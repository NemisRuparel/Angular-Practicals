import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  selectedtool ='';
    
  chooseProduct($event : any){
    this.selectedtool=$event.target.value;
  }
}
