import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Food } from 'src/app/Model/Food';
import { FoodService } from 'src/app/Service/food/food.service';

@Component({
  selector: 'app-remove-food-dialog',
  templateUrl: './remove-food-dialog.component.html',
  styleUrls: ['./remove-food-dialog.component.css'],
})
export class RemoveFoodDialogComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Food
  ) {}

  ngOnInit(): void {}

  onDelete() {
    this.foodService
      .delete(this.data.id)
      .subscribe(
        data => {
          this.snackBar.open('Food Removed', '', { duration: 3000 });
          window.location.reload();
        }
      );
  }
}
