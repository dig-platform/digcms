import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUploadProgressComponent } from './media-upload-progress.component';

describe('MediaUploadProgressComponent', () => {
  let component: MediaUploadProgressComponent;
  let fixture: ComponentFixture<MediaUploadProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MediaUploadProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaUploadProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
