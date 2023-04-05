import { CartService } from './../../Service/cart/cart.service';
import { FoodService } from './../../Service/food/food.service';
import { AuthenticationService } from './../../Service/auth/authentication.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/Model/Food';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Cart } from 'src/app/Model/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchBarForm = new FormControl<string | Food>('');
  searchContent: string = '';
  @Output() searchContentChanged: EventEmitter<string> = new EventEmitter<string>();
  isLoggedIn: boolean;
  username: string;
  options: Food[] = [];
  filteredOptions: Observable<Food[]>;
  cart!: Cart;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private foodService: FoodService,
    private cartService:CartService,
  ) {
    this.authService.loggedIn.subscribe(
      (data: boolean) => (this.isLoggedIn = data)
    );
    this.authService.username.subscribe(
      (data: string) => (this.username = data)
    );
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
    this.foodService.getAll().subscribe((data) => (this.options = data));

    this.filteredOptions = this.searchBarForm.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchContent = params['searchContent'];
    });
  }

  redirect(){
    this.router.navigateByUrl('/home')
  }

  onSearchTextChanged() {
    this.searchContentChanged.emit(this.searchContent);
  }

  private _filter(name: string): Food[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  displayFn(food: Food): string {
    return food && food.name ? food.name : '';
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }

}
