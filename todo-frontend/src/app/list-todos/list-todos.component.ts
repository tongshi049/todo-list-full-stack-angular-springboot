import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service';


export class Todo {
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
    ) {
      
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  username = sessionStorage.getItem(AUTHENTICATED_USER)
  

  message: string
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Learn Angular', false, new Date()),
  //   new Todo(3, 'Be expert to play Garen', true, new Date()),
  // ]

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos(this.username).subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }
  
  deleteTodo(id) {
    //console.log(`Delete Todo ${id}`);
    this.todoService.deleteTodo(this.username, id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Update Todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

 
}
