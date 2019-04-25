import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicofdayComponent } from './picofday.component';

describe('PicofdayComponent', () => {
  let component: PicofdayComponent;
  let fixture: ComponentFixture<PicofdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicofdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicofdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
