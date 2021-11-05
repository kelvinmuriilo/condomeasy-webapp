import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormValidations } from 'src/app/shared/custom-form-validations/custom.form-validations';
import { SignupModel } from './signup.model';
import { SignupService } from './signup.service';

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

  constructor(
    private formbuilder: FormBuilder,
    private signupService: SignupService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.startSignupForm();
  }

  send(): void {
    if (this.signupForm.valid) {
      this.signupService.send(this.getSignupModel()).subscribe(
        () => {
          this.toastService.success('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']);
        },
        (error) => {
          error?.error?.errors.forEach((element) => {
            this.toastService.error(element);
          });
        },
        () => {}
      );
    } else {
      Object.keys(this.signupForm.controls).forEach((key) => {
        if (!this.signupForm.get(key).value)
          this.setErrorOnFormControlWhenIsBlank(key);
      });
    }
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
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
        apartamentBlock: this.formbuilder.control('', [Validators.required]),
        cpf: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          FormValidations.isValidCpf(),
        ]),
        username: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        password: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        /* confirmPassword: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(8),
        ]), */
        apartmentNumber: this.formbuilder.control('', [
          Validators.required,
          Validators.min(1),
        ]),
        email: this.formbuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        phone: this.formbuilder.control('', [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
        condominiumId: this.formbuilder.control('', [Validators.required]),
      }
      /*  {
        validators: FormValidations.passwordMatchValidator,
      } */
    );
  }

  private setErrorOnFormControlWhenIsBlank(formControlName: string): void {
    this.signupForm.get(formControlName).setErrors({ required: true });
    this.signupForm.get(formControlName).markAsTouched();
  }

  private getSignupModel(): SignupModel {
    return {
      name: this.signupForm.value.firstName,
      apartmentBlock: this.signupForm.value.apartamentBlock,
      cpf: this.signupForm.value.cpf,
      username: this.signupForm.value.username,
      profileId: 1,
      condominiumId: this.signupForm.value.condominiumId,
      email: this.signupForm.value.email,
      status: 'AT',
      telephone: this.signupForm.value.phone,
      surname: this.signupForm.value.lastName,
      apartmentNumber: this.signupForm.value.apartmentNumber,
      password: this.signupForm.value.password,
    };
  }
}
