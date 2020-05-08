import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('userName', data.UserName);
      localStorage.setItem('token_value', data.Token);
      this.router.navigate(['/entries']);
    },
    (data)=>{
      alert(data.error.Message);
    });
  }
}
