import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.registerForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    },
    {
      validator: passwordMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    delete this.registerForm.value.confirmPassword;
    
    this.authService.register(this.registerForm.value).subscribe((data:any)=>{
      localStorage.setItem('userName', data.UserName);
      localStorage.setItem('token_value', data.Token);
    });
  }
}

function passwordMatch(field1, field2) {
  return function error(form) {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return { passwordMatch: true }
    } else {
      return null;
    }
  }
}