import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.less']
})
export class BreadcumbComponent {
  @Input() breadcumb: string[];
}
