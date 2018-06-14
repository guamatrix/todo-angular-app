import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/interfaces';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
