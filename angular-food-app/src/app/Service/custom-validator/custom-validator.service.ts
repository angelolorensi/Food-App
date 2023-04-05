import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor(private userService:UserService) { }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        return confirmPasswordControl.setErrors(null);
      }
    };
  }

  validateUsernameNotTaken(control: AbstractControl) {
    return this.checkUsernameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      })
    );
  }

  checkUsernameNotTaken(username: string): Observable<boolean> {
    return this.userService.getAll().pipe(
      map((userList: Array<any>) =>
        userList.filter(user => user.username === username)
      ),
      map(users => !users.length)
    );
  }

  validateEmailNotTaken(control: AbstractControl) {
    return this.checkEmailNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { emailTaken: true };
      })
    );
  }

  checkEmailNotTaken(email: string): Observable<boolean> {
    return this.userService.getAll().pipe(
      map((userList: Array<any>) =>
        userList.filter(user => user.email === email)
      ),
      map(users => !users.length)
    );
  }
}

