import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard.services';
import { TodoResolver } from './services/todo.resolver.service';
import { ChangePassComponent } from './user/change-pass/change-pass.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserResolver } from './services/user.resolver.services';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], resolve: { todos: TodoResolver }, children: [
    { path: 'home/todos', component: TodoComponent },
    { path: 'home/todos/new', component: TodoformComponent },
    { path: 'home/user', component: UserComponent, resolve: { user: UserResolver } },
    { path: 'home/user/change-pass', component: ChangePassComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, TodoResolver, UserResolver]
})
export class TodoRoutingModule {}
