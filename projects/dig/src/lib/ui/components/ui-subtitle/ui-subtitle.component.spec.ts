import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSubtitleComponent } from './ui-subtitle.component';

describe('UiSubtitleComponent', () => {
  let component: UiSubtitleComponent;
  let fixture: ComponentFixture<UiSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UiSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
