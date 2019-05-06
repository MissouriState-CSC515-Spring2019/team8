import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsroverdateComponent } from './marsroverdate.component';

describe('MarsroverdateComponent', () => {
  let component: MarsroverdateComponent;
  let fixture: ComponentFixture<MarsroverdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsroverdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsroverdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
