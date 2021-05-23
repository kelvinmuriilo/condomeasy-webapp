import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidations {
  static passwordMatchValidator(form: FormGroup): ValidationErrors {
    const passwordControl = form.controls['password'];
    const confirmPasswordControl = form.controls['confirmPassword'];
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;

    if (!password || !confirmPassword) {
      return null;
    }

    if (password !== confirmPassword) {
      passwordControl.setErrors({ passwordMatch: true });
      confirmPasswordControl.setErrors({ passwordMatch: true });
    } else {
      passwordControl.setErrors(null);
      confirmPasswordControl.setErrors(null);
    }

    return password === confirmPassword ? null : { passwordMatch: true };
  }
}
