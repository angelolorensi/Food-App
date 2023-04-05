import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FoodService } from './../../Service/food/food.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/auth/authentication.service';

@Component({
  selector: 'app-add-food-dialog',
  templateUrl: './add-food-dialog.component.html',
  styleUrls: ['./add-food-dialog.component.css']
})
export class AddFoodDialogComponent implements OnInit {

  form:FormGroup;
  username: string;

  constructor(private foodService:FoodService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private authService:AuthenticationService,
  ) {
    this.authService.username.subscribe((data: string) => this.username = data);
    this.username = this.authService.getUserName();

    this.form = this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      imageUrl: [null, Validators.required],
      foodOwner: [this.username],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.foodService.add(this.form.value).subscribe(
      data => {
        this.snackBar.open(this.form.value.name + ' was add to your foods!','',{duration:2000});
        window.location.reload();
      },
      error => {
        alert(error.message)
      }
    );
  }
}
