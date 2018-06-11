import { Resolve, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { TodosState } from '../models/state';
import { SetAuth } from '../../shared/store/shared.actions';
import { TodosService } from './todos.service';

@Injectable()
export class TodoResolver implements Resolve<any> {
  constructor(private http: HttpClient,
    private router: Router,
    private store: Store<TodosState>,
    private todosService: TodosService) {}

  async resolve()  {
    // debugger;
    try {
      const todos = await this.todosService.getTodos();
    } catch (error) {
      console.log(error);
      this.store.dispatch(new SetAuth(null));
      this.router.navigate(['login']);
    }
  }
}
