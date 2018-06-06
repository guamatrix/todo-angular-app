import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../models/States';
import { getIsAuth } from '../../app.reducer';
import { take, map } from 'rxjs/operators';

const isLogin = (url) => {
  return url.search('login') === 1 || url.search('signup') === 1;
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(select(getIsAuth), map((isAuth: boolean) => {
      const isRouteLogin = isLogin(state.url);

      if (isRouteLogin && isAuth) {
        this.router.navigate(['home']);
        return false;
      } else if (!isRouteLogin && !isAuth) {
        this.router.navigate(['login']);
      } else if (isRouteLogin && !isAuth ) {
        return true;
      }

      return isAuth;
    }));
  }
}
