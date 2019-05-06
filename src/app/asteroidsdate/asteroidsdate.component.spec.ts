import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsdateComponent } from './asteroidsdate.component';

describe('AsteroidsdateComponent', () => {
  let component: AsteroidsdateComponent;
  let fixture: ComponentFixture<AsteroidsdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidsdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidsdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
