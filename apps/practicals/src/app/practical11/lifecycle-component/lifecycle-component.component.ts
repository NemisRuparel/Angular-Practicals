import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from 
  '@angular/core'; 
@Component({
  selector: 'app-lifecycle-component',
  templateUrl: './lifecycle-component.component.html',
  styleUrls: ['./lifecycle-component.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
OnDestroy { 
   constructor() { } 
 
  ngOnInit(): void { 
    console.log('ngOnInit'); 
  } 
  ngOnChanges(): void { 
    console.log('ngOnChanges'); 
  } 
   ngDoCheck(): void { 
 
    console.log('ngDoCheck'); 
  } 
   ngAfterContentInit(): void { 
    console.log('ngAfterContentInit'); 
  } 
   ngAfterContentChecked(): void { 
    console.log('ngAfterContentChecked'); 
  } 
   ngAfterViewInit(): void { 
    console.log('ngAfterViewInit'); 
  } 
   ngAfterViewChecked(): void { 
    console.log('ngAfterViewChecked'); 
  } 
   ngOnDestroy(): void { 
    console.log('ngOnDestroy'); 
  } 
}