import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditRowComponent } from './todo-edit-row.component';

describe('TodoEditRowComponent', () => {
  let component: TodoEditRowComponent;
  let fixture: ComponentFixture<TodoEditRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
