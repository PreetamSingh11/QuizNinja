import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeMainComponentComponent } from './challenge-main-component.component';

describe('ChallengeMainComponentComponent', () => {
  let component: ChallengeMainComponentComponent;
  let fixture: ComponentFixture<ChallengeMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
