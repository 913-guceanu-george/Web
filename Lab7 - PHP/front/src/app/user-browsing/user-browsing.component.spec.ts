import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBrowsingComponent } from './user-browsing.component';

describe('UserBrowsingComponent', () => {
  let component: UserBrowsingComponent;
  let fixture: ComponentFixture<UserBrowsingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBrowsingComponent]
    });
    fixture = TestBed.createComponent(UserBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
