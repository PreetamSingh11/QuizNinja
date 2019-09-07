import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileComponentComponent } from './dashboard-profile.component';

describe('DashboardProfileComponentComponent', () => {
  let component: DashboardProfileComponentComponent;
  let fixture: ComponentFixture<DashboardProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
