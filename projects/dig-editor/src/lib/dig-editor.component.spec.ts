import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigEditorComponent } from './dig-editor.component';

describe('DigEditorComponent', () => {
  let component: DigEditorComponent;
  let fixture: ComponentFixture<DigEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
