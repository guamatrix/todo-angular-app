import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorsPipe } from './pipes/errors.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';

const MODULE = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [ErrorsPipe],
  imports: [MODULE, NgZorroAntdModule.forRoot()],
  exports: [MODULE, NgZorroAntdModule, ErrorsPipe],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})

export class SharedModule {}
