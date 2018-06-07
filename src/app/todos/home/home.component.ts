import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  urlPaths: string[] = [];
  subs: Subscription[] = [];

  constructor(public router: Router) {
    this.subs.push(
      router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        this.urlPaths = event.url.slice(1).split('/');
        console.log(this.urlPaths);
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
