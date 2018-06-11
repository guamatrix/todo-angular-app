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
    { id: 'user', title: 'User', icon: 'anticon anticon-user', child: [
        { title: 'My Info', onClick: null },
        { title: 'Change Pass', onClick: null },
        { title: 'Logout', onClick: this.onLogout.bind(this) }
      ]
    },
    { id: 'todos', title: 'Todos', icon: 'anticon anticon-file', child: [
      { title: 'My Todos', link: '/home/todos' },
      { title: 'New Todos', link: '/home/todos/new' },
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
