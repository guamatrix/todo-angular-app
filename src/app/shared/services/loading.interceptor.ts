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
    console.log('response');
    return next.handle(req).pipe(tap(
      (response: any) => {
        console.log(response);
        if (response instanceof HttpResponse) {
          this.store.dispatch(new SetLoading(false));
        }
      },
      (err) => {
        // renewtoken
        console.log(err);
        this.store.dispatch(new SetLoading(false));
      }
    ));
  }
}
