import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  register() {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['/register']);
    }
  }
}
