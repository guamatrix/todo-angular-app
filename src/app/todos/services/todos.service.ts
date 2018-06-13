import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from '../models/state';
import { Todos, ResponseTodos } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SetTodos, AddTodos, UpdateTodos, DeleteTodos } from '../store/todos.acttions';
import { Router } from '@angular/router';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

const BASE_URL = environment.BASE_URL;
const prefix = `${BASE_URL}/todos`;
@Injectable()
export class TodosService {
  constructor(private store: Store<TodosState>,
    private http: HttpClient,
    private router: Router,
    private messageService: NzMessageService,
    private notificationService: NzNotificationService) {}

  async addTodo(todo: Todos) {
    const url = prefix;
    try {
      const newTodo = await this.http.post<Todos>(url, todo).toPromise();
      this.store.dispatch(new AddTodos(newTodo));
      this.messageService.create('success', 'Todo added!');
      this.router.navigate(['home/todos']);
    } catch (error) {
      this.showError(error);
      console.log(error);
    }
  }

  async getTodos() {
    const url = prefix;
    try {
      const result = await this.http.get<{[key: string]: Todos[]}>(url).toPromise();
      this.store.dispatch(new SetTodos(result.todos));
      this.messageService.create('success', 'Todos loaded!');
    } catch (error) {
      this.showError(error);
      console.log(error);
    }
  }

  async deleteTodos(id: string) {
    const url = `${prefix}/${id}`;
    try {
      const result = await this.http.delete(url).toPromise();
      this.messageService.create('success', 'Todo deleted!');
      this.store.dispatch(new DeleteTodos(id));
    } catch (error) {
      this.showError(error);
      console.log(error);
    }
  }

  async updateTodo(todo, id: string) {
    const url = `${prefix}/${id}`;
    try {
      const result = await this.http.patch<ResponseTodos>(url, todo).toPromise();
      this.store.dispatch(new UpdateTodos(result.todo));
      this.messageService.create('success', 'Todo updated!');
    } catch (error) {
      this.showError(error);
      console.log('error', error);
    }
  }

  showError(error) {
    this.notificationService.create('error', 'Error response', `${error.statusText}`);
  }
}
