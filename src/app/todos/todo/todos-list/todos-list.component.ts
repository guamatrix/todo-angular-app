import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.less']
})
export class TodosListComponent implements OnInit {
@Input() todos;
  constructor() { }

  ngOnInit() {

  }

}
