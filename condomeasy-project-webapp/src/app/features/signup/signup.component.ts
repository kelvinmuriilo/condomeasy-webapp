import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from 'src/app/shared/custom-form-validations/custom.form-validations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  customPatternOnlyLettersAndSpaces = {
    '0': {
      pattern: new RegExp('/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/'),
    },
  };

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.startSignupForm();
  }

  send(): void {
    if (this.signupForm.valid) {
      console.log('valid');
    } else {
      Object.keys(this.signupForm.controls).forEach((key) => {
        if (!this.signupForm.get(key).value)
          this.setErrorOnFormControlWhenIsBlank(key);
      });
    }
  }

  private startSignupForm(): void {
    this.signupForm = this.formbuilder.group(
      {
        firstName: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        lastName: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        blocoApto: this.formbuilder.control('', [Validators.required]),
        cpf: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
        username: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        password: this.formbuilder.control('', Validators.required),
        confirmPassword: this.formbuilder.control('', Validators.required),
        numeroApto: this.formbuilder.control('', [
          Validators.required,
          Validators.min(1),
        ]),
        email: this.formbuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        phone: this.formbuilder.control('', [Validators.required]),
      },
      {
        validators: FormValidations.passwordMatchValidator,
      }
    );
  }

  private setErrorOnFormControlWhenIsBlank(formControlName: string): void {
    this.signupForm.get(formControlName).setErrors({ required: true });
    this.signupForm.get(formControlName).markAsTouched();
  }
}
