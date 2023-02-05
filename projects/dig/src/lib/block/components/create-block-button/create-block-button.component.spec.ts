import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlockButtonComponent } from './create-block-button.component';

describe('CreateBlockButtonComponent', () => {
  let component: CreateBlockButtonComponent;
  let fixture: ComponentFixture<CreateBlockButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreateBlockButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
