import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from '../models/state';
import { Todos } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SetTodos, AddTodos } from '../store/todos.acttions';
import { Router } from '@angular/router';

const BASE_URL = environment.BASE_URL;
@Injectable()
export class TodosService {
  constructor(private store: Store<TodosState>,
    private http: HttpClient,
    private router: Router) {}

  async addTodo(todo: Todos) {
    const url = `${BASE_URL}/todos`;
    try {
      const newTodo = await this.http.post<Todos>(url, todo).toPromise();
      this.store.dispatch(new AddTodos(newTodo));
      this.router.navigate(['home/todos']);
    } catch (error) {
      console.log(error);
    }
  }

  async getTodos() {
    const url = `${BASE_URL}/todos`;
    try {
      const result = await this.http.get<{[key: string]: Todos[]}>(url).toPromise();
      this.store.dispatch(new SetTodos(result.todos));
    } catch (error) {
      console.log(error);
    }
  }
}
