import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todos } from '../models/interfaces';
import { Store, select } from '@ngrx/store';
import { TodosState } from '../models/state';
import { getTodos } from '../store/todos.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todos[]>;
  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.todos$ = this.store.pipe(select(getTodos));
  }

}
