import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarControllerComponent } from './snackbar-controller.component';

describe('SnackbarControllerComponent', () => {
  let component: SnackbarControllerComponent;
  let fixture: ComponentFixture<SnackbarControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
