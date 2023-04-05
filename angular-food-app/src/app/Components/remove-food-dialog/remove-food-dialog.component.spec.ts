import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFoodDialogComponent } from './remove-food-dialog.component';

describe('RemoveFoodDialogComponent', () => {
  let component: RemoveFoodDialogComponent;
  let fixture: ComponentFixture<RemoveFoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFoodDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
