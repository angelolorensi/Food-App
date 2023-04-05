import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginRequestPayload } from './loginRequestPayload';
import { AuthenticationService } from './../../Service/auth/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginRequestPayload:LoginRequestPayload;
  isError?:boolean;
  registerSuccessMessage: string = '';

  constructor(
    private authService:AuthenticationService,
    private fb:FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar) {

    this.form = fb.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })

    this.loginRequestPayload = {
      username:'',
      password :''
    }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if (params['registered'] !== undefined && params['registered'] === 'true') {
        this.registerSuccessMessage = ' Please Check your inbox for activation email, '
        + 'activate your account before you Login!';
        this.snackbar.open('Signup Successful, ' + this.registerSuccessMessage,'',{duration: 10000});
    }});
  }

  onSubmit(){
    this.loginRequestPayload = this.form.value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {
      this.router.navigateByUrl('home');
      this.snackbar.open('Login Successful','',{duration: 3000});
      this.isError = false;
    }, error => {
      this.isError = true;
    })
  }

  onCancel() {
    this.location.back();
  }


}
