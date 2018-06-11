import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../../services/todos.service';
import { Todos } from '../../models/interfaces';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.less']
})
export class TodoformComponent implements OnInit {
  todosForm: FormGroup;
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (!this.todosForm.invalid) {
      const body: Todos = this.todosForm.value;
      this.todosService.addTodo(body);
    }
  }

  private initForm() {
    this.todosForm = new FormGroup({
      text: new FormControl(null, { validators: [Validators.required]})
    });
  }

}
