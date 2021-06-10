import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';
import { UserService } from 'src/app/core/user/user.service';
import { LOCALSTORAGE } from 'src/app/shared/constants';
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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      let login: LoginRequestModel = this.loginForm.getRawValue();
      this.authService.authenticate(login).subscribe(
        () => {
          this.loadUser();
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

  private loadUser(): void {
    const username = window.localStorage.getItem(LOCALSTORAGE.USER_NAME);
    const sub = this.userService.getUserFromApi(username).subscribe((user) => {
      window.localStorage.setItem(
        LOCALSTORAGE.USER_ID,
        user.data.id.toString()
      );
    });
  }
}
