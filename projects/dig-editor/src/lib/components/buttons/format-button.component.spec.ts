import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatButtonComponent } from './format-button.component';

describe('FormatButtonComponent', () => {
  let component: FormatButtonComponent;
  let fixture: ComponentFixture<FormatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormatButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
