import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from '../models/state';
import { Todos, ResponseTodos } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SetTodos, AddTodos, UpdateTodos, DeleteTodos, SelectedTodos } from '../store/todos.acttions';
import { Router } from '@angular/router';

const BASE_URL = environment.BASE_URL;
const prefix = `${BASE_URL}/todos`;
@Injectable()
export class TodosService {
  constructor(private store: Store<TodosState>,
    private http: HttpClient,
    private router: Router) {}

  async addTodo(todo: Todos) {
    const url = prefix;
    try {
      const newTodo = await this.http.post<Todos>(url, todo).toPromise();
      this.store.dispatch(new AddTodos(newTodo));
      this.router.navigate(['home/todos']);
    } catch (error) {
      console.log(error);
    }
  }

  async getTodos() {
    const url = prefix;
    try {
      const result = await this.http.get<{[key: string]: Todos[]}>(url).toPromise();
      this.store.dispatch(new SetTodos(result.todos));
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTodos(id: string, index: number) {
    this.store.dispatch(new SelectedTodos(index));
    const url = `${prefix}/${id}`;
    try {
      const result = await this.http.delete(url).toPromise();
      this.store.dispatch(new DeleteTodos());
      this.store.dispatch(new SelectedTodos(-1));
    } catch (error) {
      this.store.dispatch(new SelectedTodos(-1));
      console.log(error);
    }
  }

  async updateTodo(todo, index: number, id: string) {
    this.store.dispatch(new SelectedTodos(index));
    const url = `${prefix}/${id}`;
    try {
      const result = await this.http.patch<ResponseTodos>(url, todo).toPromise();
      this.store.dispatch(new UpdateTodos(result.todo));
      this.store.dispatch(new SelectedTodos(-1));
    } catch (error) {
      this.store.dispatch(new SelectedTodos(-1));
      console.log('error', error);
    }
  }
}
