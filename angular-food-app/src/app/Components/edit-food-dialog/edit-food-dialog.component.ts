import { MatSnackBar } from '@angular/material/snack-bar';
import { Food } from 'src/app/Model/Food';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Service/auth/authentication.service';
import { FoodService } from 'src/app/Service/food/food.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-food-dialog',
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.css']
})
export class EditFoodDialogComponent implements OnInit {

  form:FormGroup;

  constructor(private foodService:FoodService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Food
  ) {

    this.form = this.fb.group({
      id: [this.data.id],
      foodCode: [this.data.foodCode],
      name: [this.data.name, Validators.required],
      type: [this.data.type, Validators.required],
      description: [this.data.description, Validators.required],
      price: [this.data.price, Validators.required],
      imageUrl: [this.data.imageUrl, Validators.required],
      foodOwner: [this.data.foodOwner],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.foodService.update(this.form.value).subscribe(
      data => {
        this.snackBar.open(this.form.value.name + ' was edited on your foods!','',{duration:2000});
        window.location.reload();
      },
      error => {
        alert(error.message)
      }
    );
  }
}
