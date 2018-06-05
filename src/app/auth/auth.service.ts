import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { AuthAccessModel, Token } from '../shared/models/interfaces';
import { State } from '../shared/models/States';
import { SetLoading, SetAuth } from '../shared/store/shared.actions';
import { User } from '../shared/models/interfaces';

@Injectable()
export class AuthService {
  URL_BASE = 'http://localhost:3000';
  constructor( private http: HttpClient, private store: Store<State>) {}

  registerUser(credentials: AuthAccessModel) {
    return this.http.post(`${this.URL_BASE}/users`, credentials, { observe: 'response' });
  }

  login(credentials: AuthAccessModel) {
    return this.http.post(`${this.URL_BASE}/users/login`, credentials);
  }


  manageAccess(response: HttpResponse<any>) {
    const user: User = response.body;
    user.token = this.generateTokenByHeaders(response.headers);
    console.log(user);
    this.store.dispatch(new SetAuth(user));
  }

  private generateTokenByHeaders(headers): Token {
    return { 'x-auth': headers.get('x-auth') };
  }


}
