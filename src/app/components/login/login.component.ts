import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: '',
  };

  isLoading: boolean = false;

  router = inject(Router);

  login() {
    this.isLoading = true;
    if (this.userObj.username == 'mib' && this.userObj.password == '123') {
      this.router.navigateByUrl('/appointment-list');
      this.isLoading = false;
    } else {
      alert('Please enter both username and password');
      this.isLoading = false;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt with:', this.userObj);
      this.isLoading = false;
      // Here you would normally redirect to dashboard or show error
    }, 2000);
  }
}
