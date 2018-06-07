import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  menuList = [
    { id: 1, title: 'User', icon: 'anticon anticon-user', child: [
        { title: 'My Info', onClick: null },
        { title: 'Change Pass', onClick: null },
        { title: 'Logout', onClick: this.onLogout.bind(this) }
      ]
    },
    { id: 2, title: 'Todos', icon: 'anticon anticon-file', child: [
      { title: 'My Todos', link: 'todos' },
      { title: 'New Todos', link: 'todos/new' },
    ]
  },
];

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  urlPaths: string[] = [];
  subs: Subscription[] = [];

  constructor(public router: Router, private authService: AuthService) {
    this.subs.push(
      router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        this.urlPaths = event.url.slice(1).split('/');
        console.log(this.urlPaths);
      })
    );
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
