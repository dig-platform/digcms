import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigCmsComponent } from './dig-cms.component';

describe('DigCmsComponent', () => {
  let component: DigCmsComponent;
  let fixture: ComponentFixture<DigCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigCmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
