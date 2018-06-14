import { Injectable } from '@angular/core';
import { User } from '../../shared/models/interfaces';
import { AuthService } from '../../auth/services/auth.service';
import { Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { TodosService } from './todos.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private authService: AuthService,
    private router: Router,
    private todosService: TodosService) {}

  resolve(): Observable<User> {
    return this.authService.getUserInfo().pipe(catchError(error => {
      console.log(error);
      this.todosService.showError(error);
      return of(error);
    }));
  }
}
