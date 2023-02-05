import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {DigCmsService} from '../../services/dig-cms.service';
import {AuthService} from '../../../user/services/auth.service';
import {MatCardModule} from '@angular/material/card';
import {LoadingMessageComponent} from '../../../ui/components/loading-message/loading-message.component';

@Component({
  selector: 'dig-app-setup',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatToolbarModule, MatButtonModule, MatCardModule, LoadingMessageComponent],
  templateUrl: './app-setup.component.html',
  styleUrls: ['./app-setup.component.scss']
})
export class AppSetupComponent implements OnInit{
  public loaded: boolean = false;
  private _errors: string[] = [];

  set errors(errors: string[]) {
    this._errors = errors;
    this.valid.emit(errors.length === 0);
  }

  get errors() {
    return this._errors
  }

  public creatingOwner = false;

  @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private digCms: DigCmsService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.digCms.appCheck().then(res => {
      this.loaded = true;
      this.errors = res ? [...res] : [];
    })
  }

  stepComplete(step: string) {
    return ! this.errors.includes(step);
  }

  cancel() {
    return this.router.navigate(['/']);
  }

  done() {
    return this.router.navigate(['/dig-cms']);
  }

  async becomeOwner() {
    this.creatingOwner = true;
    await this.authService.becomeOwner();
    this.creatingOwner = false;
    this.errors = this.errors.filter(e => e !== 'adminUser');
  }
}
