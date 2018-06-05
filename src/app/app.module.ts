import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { reducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    StoreModule.forRoot(reducers)
  ],
  bootstrap: [ AppComponent ],
  providers   : []
})
export class AppModule { }
