import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorsPipe } from './pipes/errors.pipe';

const MODULE = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [ErrorsPipe],
  imports: [MODULE, NgZorroAntdModule.forRoot()],
  exports: [MODULE, NgZorroAntdModule, ErrorsPipe]
})

export class SharedModule {}
