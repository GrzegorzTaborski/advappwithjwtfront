import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdvComponent } from './user-adv.component';

describe('UserAdvComponent', () => {
  let component: UserAdvComponent;
  let fixture: ComponentFixture<UserAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
