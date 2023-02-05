import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageButtonComponent } from './create-page-button.component';

describe('CreatePageButtonComponent', () => {
  let component: CreatePageButtonComponent;
  let fixture: ComponentFixture<CreatePageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreatePageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
