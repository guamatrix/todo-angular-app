import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorsPipe } from './pipes/errors.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';
import { ScrollDirective } from './scroll.directive';
import { FocusDirective } from './focus.directive';
import { SubmitEnterDirective } from './submit-enter.directive';

const MODULE = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule
];

const DIRECTIVES = [
  ScrollDirective,
  FocusDirective,
  SubmitEnterDirective
];

@NgModule({
  declarations: [ErrorsPipe, DIRECTIVES],
  imports: [MODULE, NgZorroAntdModule.forRoot()],
  exports: [MODULE, NgZorroAntdModule, ErrorsPipe, DIRECTIVES],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})

export class SharedModule {}
