import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNodeListComponent } from './content-node-list.component';

describe('ContentNodeListComponent', () => {
  let component: ContentNodeListComponent;
  let fixture: ComponentFixture<ContentNodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentNodeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
