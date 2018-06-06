import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class TodoModule {}
