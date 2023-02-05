import {Directive, HostListener, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Directive({
  standalone: true,
  selector: '[signOut]'
})
export class SignOutDirective implements OnDestroy{
  private sub!: Subscription;

  constructor(private router: Router, private auth: AuthService) {
  }

  @Input() redirect!: any[] | string;

  @HostListener('click', ['$event.target'])
  onClick() {
    this.auth.signOut();
    if (this.redirect) {
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
