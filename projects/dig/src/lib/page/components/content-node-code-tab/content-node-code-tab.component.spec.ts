import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNodeCodeTabComponent } from './content-node-code-tab.component';

describe('ContentNodeCodeTabComponent', () => {
  let component: ContentNodeCodeTabComponent;
  let fixture: ComponentFixture<ContentNodeCodeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentNodeCodeTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNodeCodeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
