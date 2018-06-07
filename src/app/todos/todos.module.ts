import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todos-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './services/auth.interceptor';

import { todosReducer } from './store/todos.reducer';
import { BreadcumbComponent } from './home/breadcumb/breadcumb.component';

const COMPONENTS = [
  TodoComponent,
  TodoformComponent,
  HomeComponent
];

@NgModule({
  declarations: [COMPONENTS, BreadcumbComponent],
  imports: [
    TodoRoutingModule,
    SharedModule,
    StoreModule.forFeature('todosState', todosReducer)
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class TodoModule {}
