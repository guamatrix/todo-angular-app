import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { State } from '../models/States';
import { SetLoading } from '../store/shared.actions';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private store: Store<State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(new SetLoading(true));
    return next.handle(req).pipe(tap(
      (response: any) => {
        if (response instanceof HttpResponse) {
          this.store.dispatch(new SetLoading(false));
        }
      },
      error => {
        // renewtoken
        this.store.dispatch(new SetLoading(false));
      }
    ));
  }
}
