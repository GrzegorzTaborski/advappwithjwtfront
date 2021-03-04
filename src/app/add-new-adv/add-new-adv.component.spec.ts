import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAdvComponent } from './add-new-adv.component';

describe('AddNewAdvComponent', () => {
  let component: AddNewAdvComponent;
  let fixture: ComponentFixture<AddNewAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewAdvComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
