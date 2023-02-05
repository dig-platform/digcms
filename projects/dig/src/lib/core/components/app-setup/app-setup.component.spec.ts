import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSetupComponent } from './app-setup.component';

describe('AppSetupComponent', () => {
  let component: AppSetupComponent;
  let fixture: ComponentFixture<AppSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
