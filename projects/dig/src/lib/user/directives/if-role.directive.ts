import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Directive({
  selector: '[ifRole]',
  standalone: true
})
export class IfRoleDirective implements OnDestroy {
  private hasView = false;
  private sub!: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  @Input() set ifRole(role: string) {
    this.sub = this.auth.hasRole(role)
      .subscribe(hasRole => {
        if (hasRole) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.hasView = true;
        } else {
          this.viewContainer.clear();
          this.hasView = false;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
