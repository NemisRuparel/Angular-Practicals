import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical10Component } from './practical10.component';

describe('Practical10Component', () => {
  let component: Practical10Component;
  let fixture: ComponentFixture<Practical10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practical10Component]
    });
    fixture = TestBed.createComponent(Practical10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
