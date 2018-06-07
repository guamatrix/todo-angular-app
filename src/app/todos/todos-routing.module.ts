import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard.services';
import { TodoResolver } from './services/todo.resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'todo', component: TodoComponent, resolve: { todos: TodoResolver } },
    { path: 'todo/new', component: TodoformComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, TodoResolver]
})
export class TodoRoutingModule {}
