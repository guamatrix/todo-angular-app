import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
  TodoComponent,
  TodoformComponent,
  HomeComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    TodoRoutingModule,
    SharedModule],
  exports: [],
})
export class TodoModule {}
