import { Resolve, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoResolver implements Resolve<any> {
  constructor(private http: HttpClient,
    private router: Router) {}

  async resolve()  {
    try {
      const todos = await this.http.get('http://localhost:3000/todos').toPromise();
      return todos;
    } catch (error) {
      this.router.navigate(['login']);
    }
  }
}