import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../Service/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder,private userService:UserService,private snackbar:MatSnackBar,private router:Router) {
    this.form = fb.group({
      email:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.forgetPassword(this.form.value.email).subscribe(
      data => {
        alert('Password recovey email sent, Check your email!');
      }
    );
  }

}
