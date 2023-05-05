import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfButtonComponent } from './sf-button.component';

describe('SfButtonComponent', () => {
  let component: SfButtonComponent;
  let fixture: ComponentFixture<SfButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SfButtonComponent],
    });
    fixture = TestBed.createComponent(SfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
