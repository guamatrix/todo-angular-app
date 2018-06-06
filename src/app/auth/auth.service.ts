import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthAccessModel, Token } from '../shared/models/interfaces';
import { State } from '../shared/models/States';
import { SetLoading, SetAuth } from '../shared/store/shared.actions';
import { User } from '../shared/models/interfaces';
import { environment } from '../../environments/environment';

const URL_BASE = environment.BASE_URL;

@Injectable()
export class AuthService {
  constructor( private http: HttpClient,
    private store: Store<State>,
    private route: Router) {}

  registerUser(credentials: AuthAccessModel) {
    const url = `${URL_BASE}/users`;
    return this.http.post(url, credentials, { observe: 'response' });
  }

  login(credentials: AuthAccessModel) {
    const url = `${URL_BASE}/users/login`;
    return this.http.post(url, credentials, { observe: 'response' });
  }

  manageAccess(response: HttpResponse<any>) {
    const user: User = response.body;
    user.token = this.generateTokenByHeaders(response.headers);
    console.log(user);
    this.store.dispatch(new SetAuth(user));
    this.route.navigate(['home']);
  }

  private generateTokenByHeaders(headers): Token {
    return { 'x-auth': headers.get('x-auth') };
  }

}
