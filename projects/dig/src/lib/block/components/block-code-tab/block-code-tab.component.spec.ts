import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCodeTabComponent } from './block-code-tab.component';

describe('BlockCodeTabComponent', () => {
  let component: BlockCodeTabComponent;
  let fixture: ComponentFixture<BlockCodeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlockCodeTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockCodeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
