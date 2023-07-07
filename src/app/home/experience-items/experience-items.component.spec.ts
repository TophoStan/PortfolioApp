import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceItemsComponent } from './experience-items.component';

describe('ExperienceItemsComponent', () => {
  let component: ExperienceItemsComponent;
  let fixture: ComponentFixture<ExperienceItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceItemsComponent]
    });
    fixture = TestBed.createComponent(ExperienceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
