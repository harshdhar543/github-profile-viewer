import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerCardComponent } from './follower-card.component';

describe('FollowerCardComponent', () => {
  let component: FollowerCardComponent;
  let fixture: ComponentFixture<FollowerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowerCardComponent]
    });
    fixture = TestBed.createComponent(FollowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
