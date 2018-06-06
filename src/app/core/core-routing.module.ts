import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { SignGuard } from '../auth/services/sign.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [SignGuard]  },
  { path: 'signup', component: LoginComponent, canActivate: [SignGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [SignGuard]
})

export class CoreRoutingModule {}
