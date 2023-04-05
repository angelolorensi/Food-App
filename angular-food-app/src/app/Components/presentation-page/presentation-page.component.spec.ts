import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPageComponent } from './presentation-page.component';

describe('PresentationPageComponent', () => {
  let component: PresentationPageComponent;
  let fixture: ComponentFixture<PresentationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
