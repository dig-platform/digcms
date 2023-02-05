import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNavComponent } from './block-nav.component';

describe('BlockNavComponent', () => {
  let component: BlockNavComponent;
  let fixture: ComponentFixture<BlockNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlockNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
