import { RemoveFoodDialogComponent } from './../remove-food-dialog/remove-food-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/Service/auth/authentication.service';
import { AddFoodDialogComponent } from './../add-food-dialog/add-food-dialog.component';
import { FoodService } from './../../Service/food/food.service';
import { Component, OnInit} from '@angular/core';
import { Food } from 'src/app/Model/Food';
import { MatDialog } from '@angular/material/dialog';
import { first, Observable } from 'rxjs';
import { EditFoodDialogComponent } from '../edit-food-dialog/edit-food-dialog.component';

@Component({
  selector: 'app-food-panel',
  templateUrl: './food-panel.component.html',
  styleUrls: ['./food-panel.component.css']
})
export class FoodPanelComponent implements OnInit {

  foods?: Observable<Food[]>;
  username:string;
  displayedColumns: string[] = ['image', 'name', 'description', 'price','actions'];

  constructor(private foodService:FoodService,
              private dialog:MatDialog,
              private snackBar:MatSnackBar,
              private authService:AuthenticationService) {
    this.authService.username.subscribe((data: string) => this.username = data);
    this.username = this.authService.getUserName();
  }

  ngOnInit(): void {
    this.getFoods()
  }

  getFoods(){
    this.foods = this.foodService.getByFoodOwner(this.username);
  }

  onAddFood(){
    this.dialog.open(AddFoodDialogComponent);
    this.getFoods();
  }

  onEditFood(food:Food){
    this.dialog.open(EditFoodDialogComponent, {
      data:{
        id:food.id,
        name:food.name,
        type:food.type,
        description:food.description,
        price:food.price,
        imageUrl:food.imageUrl,
        foodOwner:food.foodOwner
      }
    })
  }

  onRemoveFood(id:number){
    this.dialog.open(RemoveFoodDialogComponent, {
      data:{
        id:id
      }
    })
 }

}
