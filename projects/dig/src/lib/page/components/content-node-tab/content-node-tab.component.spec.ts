import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNodeTabComponent } from './content-node-tab.component';

describe('ContentNodeTabComponent', () => {
  let component: ContentNodeTabComponent;
  let fixture: ComponentFixture<ContentNodeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentNodeTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNodeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
