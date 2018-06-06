import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthAccessModel } from '../../shared/models/interfaces';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { State } from '../../shared/models/States';
import { getIsLoading } from '../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
  FIELDS = [
    { label: 'E-mail', name: 'email', placeholder: 'Email', required: true },
    { label: 'Password', name: 'password', placeholder: 'Password', required: true }
  ];

  authForm: FormGroup;
  loading: Observable<boolean>;
  error: string;
  observable$: Observable<any>;
  subs: Subscription[] = [];
  isLogin: boolean;

  constructor(private authServices: AuthService,
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subs.push(this.route.url.subscribe(
      url => {
        this.isLogin = url[0].path === 'login';
      }
    ));

    this.initForm();
    this.loading = this.store.pipe(select(getIsLoading));
  }

  private initForm() {
    this.authForm = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      remember: new FormControl(false)
    });
  }

  onSubmit() {
    if (!this.authForm.invalid) {
      const credentials: AuthAccessModel = this.authForm.value;
      if (!this.isLogin) {
        this.observable$ = this.authServices.registerUser(credentials);
      } else {
        this.observable$ = this.authServices.login(credentials);
      }
      this.subs.push(this.observable$.subscribe(
        resp => {
          this.authServices.manageAccess(resp);
        }, ({ error }) => {
          this.authForm.get('email').setErrors({ email: true });
          this.error = error.errors;
        }
      ));
    }
  }

  onChangeAccessMode() {
    const url = this.isLogin ? 'signup' : 'login';
    this.router.navigate([url]);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
