import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      this.authService.autenticate(username, password)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        () => {
          this.toastrService.error('Falha ao realizar login')
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
    this.loginForm.get(formControlName).setErrors({ required: true })
    this.loginForm.get(formControlName).markAsTouched();
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    });
  }

}
