import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.less']
})
export class TodosListComponent implements OnInit {
@Input() todos;
  constructor(private todosService: TodosService) { }

  ngOnInit() {

  }

  deleteTodo(id: string) {
    this.todosService.deleteTodos(id);
  }

  completeTodo(id: string) {
    this.todosService.updateTodo({ completed: true }, id);
  }

}
