import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  user: User;
  isUpdate = false;
  constructor(private route: ActivatedRoute) { }

  toggleUpdate() {
    this.isUpdate = !this.isUpdate;
  }

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
  }

}
