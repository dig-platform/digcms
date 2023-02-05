import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Directive({
  standalone: true,
  selector: '[ifAuth]'
})
export class IfAuthDirective implements OnDestroy {
  private hasView = false;
  private sub!: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  @Input() set ifAuth(show: boolean) {
    this.sub = this.auth.user()
      .subscribe(user => {
        if ((user && show) || (! user && ! show)) {
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
