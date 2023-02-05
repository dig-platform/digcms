import {Directive, HostListener, Input, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {first, Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Directive({
  standalone: true,
  selector: '[signIn]'
})
export class SignInDirective implements OnDestroy{
  private sub!: Subscription;
  constructor(private router: Router, private auth: AuthService) { }

  @Input() redirect!: any[] | string;

  @HostListener('click', ['$event.target'])
  async onClick() {
    const identity = await this.auth.googleSignIn();
    if (identity && this.redirect) {
      if (Array.isArray(this.redirect)) {
        return this.router.navigate(this.redirect);
      } else {
        return this.router.navigateByUrl(this.redirect);
      }
    }
    return;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
