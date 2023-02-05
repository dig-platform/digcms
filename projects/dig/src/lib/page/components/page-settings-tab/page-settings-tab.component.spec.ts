import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSettingsTabComponent } from './page-settings-tab.component';

describe('PageSettingsTabComponent', () => {
  let component: PageSettingsTabComponent;
  let fixture: ComponentFixture<PageSettingsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageSettingsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSettingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
