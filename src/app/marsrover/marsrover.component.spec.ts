import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsroverComponent } from './marsrover.component';

describe('MarsroverComponent', () => {
  let component: MarsroverComponent;
  let fixture: ComponentFixture<MarsroverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsroverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsroverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
