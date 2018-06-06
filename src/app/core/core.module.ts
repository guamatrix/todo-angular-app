import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/services/auth.service';
import { LoadingInterceptor } from '../shared/services/loading.interceptor';
import { CoreRoutingModule } from './core-routing.module';
import { TodoModule } from '../todo/todo.module';

const MODULE = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  SharedModule,
  AuthModule,
  TodoModule,
  CoreRoutingModule,
];

@NgModule({
  declarations: [],
  imports: [MODULE],
  exports: [MODULE],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthService
  ]
})

export class CoreModule {}
