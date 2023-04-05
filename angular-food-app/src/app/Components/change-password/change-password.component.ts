import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../Service/user/user.service';
import { PasswordChangeRequest } from './change-passwordRequestPayload';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/Service/custom-validator/custom-validator.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  token: string = '';
  changePasswordRequest:PasswordChangeRequest;

  constructor(private fb: FormBuilder,
              private route:ActivatedRoute,
              private userService:UserService,
              private snackbar:MatSnackBar,
              private router:Router,
              private customValidator: CustomValidatorService,) {
    this.form = fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
    },
     {
      validator: this.customValidator.passwordMatchValidator('newPassword','confirmPassword')
      }
    );

    this.changePasswordRequest = {
      newPassword:'',
      token:''
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.form.valid){
      return;
    }

    this.changePasswordRequest.token = this.route.snapshot.paramMap.get('token');
    this.changePasswordRequest.newPassword = this.form.value.newPassword;

    this.userService.changePassword(this.changePasswordRequest).subscribe(
      data => {
        this.snackbar.open('Your password was sucefully changed','',{duration:5000});
        this.router.navigateByUrl('/login');
      }
    );
  }
}
