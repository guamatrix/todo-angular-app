import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthInterceptor } from '../shared/services/auth.interceptor';
import { LoadingInterceptor } from '../shared/services/loading.interceptor';
import { CoreRoutingModule } from './core-routing.module';

const MODULE = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  SharedModule,
  AuthModule,
  CoreRoutingModule
];

const COMPONENTS = [
  HomeComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULE],
  exports: [COMPONENTS, MODULE],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService
  ]
})

export class CoreModule {}
