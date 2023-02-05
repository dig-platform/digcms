import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagControlComponent } from './tag-control.component';

describe('TagControlComponent', () => {
  let component: TagControlComponent;
  let fixture: ComponentFixture<TagControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TagControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
