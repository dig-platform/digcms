import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonHeadlineComponent } from './toolbar-button-headline.component';

describe('ToolbarButtonHeadlineComponent', () => {
  let component: ToolbarButtonHeadlineComponent;
  let fixture: ComponentFixture<ToolbarButtonHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToolbarButtonHeadlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarButtonHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
