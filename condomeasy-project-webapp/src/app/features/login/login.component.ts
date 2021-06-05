import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';
import { LoginRequestModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  defaultUsername: string = 'admin';
  defaultPassword: string = 'admin';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      const login: LoginRequestModel = {
        username,
        password,
      };

      this.authService.authenticate(login).subscribe(
        () => {
          this.router.navigate(['/advertisements']);
        },
        (error) => {
          this.toastrService.error(error.error.message);
        }
      );
    } else {
      if (!username) {
        this.setErrorOnFormControlWhenIsBlank('username');
      }

      if (!password) {
        this.setErrorOnFormControlWhenIsBlank('password');
      }
    }
  }

  private setErrorOnFormControlWhenIsBlank(formControlName: string): void {
    this.loginForm.get(formControlName).setErrors({ required: true });
    this.loginForm.get(formControlName).markAsTouched();
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
    });
  }
}
