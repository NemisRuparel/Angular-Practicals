import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Practical7Component } from './practical7.component';

describe('Practical7Component', () => {
  let component: Practical7Component;
  let fixture: ComponentFixture<Practical7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practical7Component]
    });
    fixture = TestBed.createComponent(Practical7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
