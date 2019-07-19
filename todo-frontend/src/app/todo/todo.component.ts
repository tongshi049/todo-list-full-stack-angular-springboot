import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;

  id: number;

  username: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo(this.username, this.id).subscribe(
        data => { this.todo = data; console.log(this.todo.description); }
      )
    }

    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
  }

  saveTodo() {
    if (this.id == -1) { // === is used to compare objects
                         // == compare primitive types
      //Create Todo
      this.todoService.createTodo(this.username, this.todo).subscribe(
        response => {
          console.log(response);
          console.log(this.username);
          this.router.navigate(['todos']);
        }
      );

    } else {

      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      );
    }

  }

}
