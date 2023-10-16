import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  username!: string;
  password!: string;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  login() {
    this.loginService.getToken(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
      if (!!data) {
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/new-operation']);
      }    
    }, error => {
      console.error(error.message);
      alert("Incorrect username or password.");
    })
  }
}
