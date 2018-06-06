import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { AuthAccessModel, Token } from '../shared/models/interfaces';
import { State } from '../shared/models/States';
import { SetLoading, SetAuth } from '../shared/store/shared.actions';
import { User } from '../shared/models/interfaces';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  URL_BASE = environment.BASE_URL;
  constructor( private http: HttpClient, private store: Store<State>) {}

  registerUser(credentials: AuthAccessModel) {
    const url = `${this.URL_BASE}/users`;
    return this.http.post(url, credentials, { observe: 'response' });
  }

  login(credentials: AuthAccessModel) {
    const url = `${this.URL_BASE}/users/login`;
    return this.http.post(url, credentials);
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
