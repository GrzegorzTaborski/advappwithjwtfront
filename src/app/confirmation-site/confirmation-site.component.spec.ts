import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSiteComponent } from './confirmation-site.component';

describe('ConfirmationSiteComponent', () => {
  let component: ConfirmationSiteComponent;
  let fixture: ComponentFixture<ConfirmationSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
