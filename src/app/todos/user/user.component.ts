import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../shared/models/interfaces';
import { State } from '../models/state';
import { getUser } from '../store/todos.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  isUpdate = false;
  constructor(private store: Store<State>) { }

  toggleUpdate() {
    this.isUpdate = !this.isUpdate;
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUser));
  }

}
