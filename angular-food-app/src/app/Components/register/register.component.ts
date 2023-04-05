import { FileHandler } from './../../Model/FileHandler';
import { CustomValidatorService } from './../../Service/custom-validator/custom-validator.service';
import { AuthenticationService } from './../../Service/auth/authentication.service';
import { RegisterRequestPayload } from './registerRequestPayload';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerRequestPayload: RegisterRequestPayload;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthenticationService,
    private customValidator: CustomValidatorService,
    private router: Router,
    private snackbar: MatSnackBar,
    private sanitazer: DomSanitizer
  ) {
    this.form = fb.group(
      {
        username: ['',[Validators.required, Validators.minLength(3)],this.customValidator.validateUsernameNotTaken.bind(this.customValidator)],
        email: ['',[Validators.required, Validators.email],this.customValidator.validateEmailNotTaken.bind(this.customValidator)],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required]],
        sex: ['', [Validators.required]],
      },
      {
        validator: this.customValidator.passwordMatchValidator('password','confirmPassword'),
      }
    );
    this.registerRequestPayload = {
      username: '',
      password: '',
      email: '',
      phone: '',
      sex: '',
      profileImage: [],
    };
  }

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate(['/login'], { queryParams: { registered: 'false' } });
  }

  onSubmit() {
    if (!this.form.valid) {
      this.snackbar.open('Invalid registration Please try again.', '', {
        duration: 2000,
      });
      return;
    }

    const formData = this.prepareFormData(this.registerRequestPayload)

    this.authService.register(formData).subscribe(
      (data) => {
        this.router.navigate(['/login'], {
          queryParams: { registered: 'true' },
        });
      },
      (error) => {
        this.snackbar.open('Registration Failed! Please try again.', '', {
          duration: 3000,
        });
      }
    );
  }

  prepareFormData(registerRequestPayload:RegisterRequestPayload):FormData{
    const formData = new FormData();

    formData.append(
      'user',
      new Blob([JSON.stringify(this.form.value)], {type: 'application/json'})
    );

    for(let i = 0; i < registerRequestPayload.profileImage.length; i++){
      formData.append(
        'imageFile',
        registerRequestPayload.profileImage[i].file,
        registerRequestPayload.profileImage[i].file.name
        );
    }
    return formData;
  }

  onFileSelected(event: any) {
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandler: FileHandler = {
        file: file,
        url: this.sanitazer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.registerRequestPayload.profileImage.push(fileHandler);
    }
  }
}
