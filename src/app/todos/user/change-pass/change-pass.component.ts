import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { ChangePassModel } from '../../../shared/models/interfaces';

const FIELDS = [
  { name: 'oldPassword', placeholder: 'Old Password', label: 'Old Password' },
  { name: 'newPassword', placeholder: 'New Password', label: 'New Password' },
  { name: 'confirmPassword', placeholder: 'Confirm Password', label: 'Confirm Password' },
];

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.less']
})
export class ChangePassComponent implements OnInit {
  fields = FIELDS;
  changePassForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.changePassForm = new FormGroup({
      oldPassword: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      newPassword: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)]}),
      confirmPassword: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] })
    });
  }

  onSubmit() {
    if (!this.changePassForm.invalid) {
      const body: ChangePassModel = this.changePassForm.value;
      this.authService.changePass(body);
    }
  }

}
