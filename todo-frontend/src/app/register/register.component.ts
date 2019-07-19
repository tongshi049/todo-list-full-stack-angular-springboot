import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';

export class User {
  constructor (
    public username: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  errorMessage = 'The username has already been registered.';
  
  invalidRegister = false;

  successfullyRegister = false;

  constructor(
    private userdataService: UserDataService
  ) { }

  ngOnInit() {
    this.user = new User('','');
  }

  register() {
    console.log("register");
    this.userdataService.createUser(this.user).subscribe(
      response => { console.log(response); this.successfullyRegister = true; },
      error => { console.log(error); this.invalidRegister = true;}
    )
    
  }


}
