import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../../models/interfaces';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-edit-row',
  templateUrl: './todo-edit-row.component.html',
  styleUrls: ['./todo-edit-row.component.less']
})
export class TodoEditRowComponent implements OnInit {
  @Input()name: string;
  @Input()todo: Todos;
  @Input()index: number;

  isEdit = false;
  formUpdate: FormGroup;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.initForm();
  }

  toogleEdit() {
    this.isEdit = !this.isEdit;
  }

  async onUpdate() {
    if (!this.formUpdate.invalid) {
      const body = this.formUpdate.value;
      await this.todosService.updateTodo(body, this.index, this.todo._id);
      this.toogleEdit();
    }
  }

  initForm() {
    this.formUpdate = new FormGroup({
      [this.name]: new FormControl(this.todo[this.name], { validators: [Validators.required]})
    });
  }
}
