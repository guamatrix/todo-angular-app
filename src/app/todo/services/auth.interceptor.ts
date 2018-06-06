import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take, switchMap } from 'rxjs/operators';
import { State } from '../../shared/models/States';
import { getUser } from '../../app.reducer';
import { User } from '../../shared/models/interfaces';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted', req);
    return this.store.pipe(
      select(getUser),
      take(1),
      switchMap((user: User) => {
        const copiedReq = req.clone({
          params: req.params.set('x-auth', user.token['x-auth'])
        });
        return next.handle(copiedReq);
      })
    );
  }
}
