import { Observable } from 'rxjs';
import { CartService } from './../../Service/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/Model/Food';
import { AuthenticationService } from 'src/app/Service/auth/authentication.service';
import { FoodService } from 'src/app/Service/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allFoods?: Observable<Food[]>;
  foods?: Observable<Food[]>;
  beverages?: Observable<Food[]>;
  isLoggedIn: boolean;
  username: string;
  searchText: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private foodService: FoodService,
    private cartService: CartService,
  ) {
    this.authService.loggedIn.subscribe(
      (data: boolean) => (this.isLoggedIn = data)
    );
    this.authService.username.subscribe(
      (data: string) => (this.username = data)
    );
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
  }

  ngOnInit(): void {
    if (this.isLoggedIn == false) {
      this.router.navigateByUrl('login');
    }
    this.allFoods = this.foodService.getAll();
    this.foods = this.foodService.getByType('food');
    this.beverages = this.foodService.getByType('beverage');
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  addToCart(food:Food){
    this.cartService.addToCart(food);
    // this.router.navigateByUrl('/cart');
  }


}
