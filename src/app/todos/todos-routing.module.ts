import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard.services';
import { TodoResolver } from './services/todo.resolver.service';
import { ChangePassComponent } from './user/change-pass/change-pass.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], resolve: { todos: TodoResolver }, children: [
    { path: 'home/todos', component: TodoComponent },
    { path: 'home/todos/new', component: TodoformComponent },
    { path: 'home/user', component: UserComponent },
    { path: 'home/user/change-pass', component: ChangePassComponent },
    { path: 'home/user/update', component: UserFormComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, TodoResolver]
})
export class TodoRoutingModule {}
