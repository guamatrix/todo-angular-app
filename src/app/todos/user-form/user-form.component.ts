import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/models/interfaces';
import { AuthService } from '../../auth/services/auth.service';

const FIELDS = [
  { name: 'firstName', label: 'First Name', placeholder: 'First name', type: 'text'},
  { name: 'lastName', label: 'Last Name', placeholder: 'Last name', type: 'text'},
  { name: 'birthDay', label: 'Birth Day', placeholder: 'Select date', type: 'date'},
];

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {
  @Output() user: User;
  @Output() cancel = new EventEmitter<void>();
  formUser: FormGroup;
  fields = FIELDS;
  constructor(private authServices: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formUser = new FormGroup({
      firstName: new FormControl(this.user.firstName, { validators: [Validators.required]}),
      lastName: new FormControl(this.user.lastName, { validators: [Validators.required]}),
      birthDay: new FormControl(this.user.birthDay, { validators: [Validators.required]})
    });
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.formUser.invalid) {
      const body = this.formUser.value;
      this.authServices.updateUser(body).then((user: User) => {
        this.user = user;
        this.onCancel();
      });
    }
  }

}
