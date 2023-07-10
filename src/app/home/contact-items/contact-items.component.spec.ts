import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemsComponent } from './contact-items.component';

describe('ContactItemsComponent', () => {
  let component: ContactItemsComponent;
  let fixture: ComponentFixture<ContactItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactItemsComponent]
    });
    fixture = TestBed.createComponent(ContactItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
