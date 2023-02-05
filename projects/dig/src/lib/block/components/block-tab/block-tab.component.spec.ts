import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTabComponent } from './block-tab.component';

describe('BlockTabComponent', () => {
  let component: BlockTabComponent;
  let fixture: ComponentFixture<BlockTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlockTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
