import { Component } from '@angular/core';

class Todo {
  id?: string;
  text?: string;
  isCompeted?: boolean;
}

@Component({
  selector: 'my-projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo() {}
}
