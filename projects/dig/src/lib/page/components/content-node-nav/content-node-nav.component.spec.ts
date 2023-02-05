import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNodeNavComponent } from './content-node-nav.component';

describe('ContentNodeNavComponent', () => {
  let component: ContentNodeNavComponent;
  let fixture: ComponentFixture<ContentNodeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentNodeNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNodeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
