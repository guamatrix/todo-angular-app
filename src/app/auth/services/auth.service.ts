import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthAccessModel, ChangePassModel, Token } from '../../shared/models/interfaces';
import { State } from '../../shared/models/States';
import { SetLoading, SetAuth } from '../../shared/store/shared.actions';
import { User } from '../../shared/models/interfaces';
import { environment } from '../../../environments/environment';
import { NzMessageService } from 'ng-zorro-antd';
import { TodosService } from '../../todos/services/todos.service';
import { Observable } from 'rxjs';
import { SetUser } from '../../todos/store/todos.acttions';

const URL_BASE = environment.BASE_URL;

@Injectable()
export class AuthService {
  constructor( private http: HttpClient,
    private store: Store<State>,
    private route: Router,
    private messageService: NzMessageService,
    private todosService: TodosService) {}

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
    this.store.dispatch(new SetAuth(user));
    this.route.navigate(['home/todos']);
  }

  async changePass(body: ChangePassModel) {
    const url = `${URL_BASE}/users/me/change-password`;
    try {
      await this.http.patch(url, body).toPromise();
      this.messageService.create('success', 'Pass Changed!');
      this.route.navigate(['home/todos']);
    } catch (error) {
      this.todosService.showError(error);
    }
  }

  async updateUser(body) {
    const url = `${URL_BASE}/users/me`;
    try {
      const user = await this.http.patch<User>(url, body).toPromise();
      this.store.dispatch(new SetUser(user));
      this.messageService.create('success', 'User Updated!');
    } catch (error) {
      this.todosService.showError(error);
    }
  }

  getUserInfo(): Observable<User> {
    const url = `${URL_BASE}/users/me`;
    return this.http.get<User>(url).pipe(map((user: User) => {
      this.store.dispatch(new SetUser(user));
      return user;
    }));
  }

  private generateTokenByHeaders(headers): Token {
    return { 'x-auth': headers.get('x-auth') };
  }

  logout() {
    const url = `${URL_BASE}/users/me/token`;
    this.http.delete(url).pipe(take(1)).subscribe(
      resp => {
        this.store.dispatch(new SetAuth(null));
        this.route.navigate(['login']);
      }, error => {
        this.todosService.showError(error);
      }
    );
  }

}
