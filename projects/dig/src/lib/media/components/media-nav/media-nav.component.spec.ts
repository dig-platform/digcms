import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaNavComponent } from './media-nav.component';

describe('MediaNavComponent', () => {
  let component: MediaNavComponent;
  let fixture: ComponentFixture<MediaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MediaNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
