import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengesComponentComponent } from './my-challenges-component.component';

describe('MyChallengesComponentComponent', () => {
  let component: MyChallengesComponentComponent;
  let fixture: ComponentFixture<MyChallengesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChallengesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
