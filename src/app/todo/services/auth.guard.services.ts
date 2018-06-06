import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../shared/models/States';
import { getIsAuth } from '../../app.reducer';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(select(getIsAuth), map((isAuth: boolean) => {

      if (!isAuth) {
        this.router.navigate(['login']);
      }

      return isAuth;
    }));
  }
}
