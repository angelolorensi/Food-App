import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Food } from '../../Model/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(environment.apiAdress + 'food/find/all');
  }

  public getById(foodId:number): Observable<Food>{
    return this.http.get<Food>(environment.apiAdress + 'food/find/' + foodId);
  }

  public getByName(foodName:string): Observable<Food[]>{
    return this.http.get<Food[]>(environment.apiAdress + 'food/search/' + foodName);
  }

  public getByFoodOwner(foodOwner:string): Observable<Food[]>{
    return this.http.get<Food[]>(environment.apiAdress + 'food/find/foodOwner/' + foodOwner);
  }

  public getByType(type:string): Observable<Food[]>{
    return this.http.get<Food[]>(environment.apiAdress + 'food/find/type/' + type);
  }

  public add(food: Food): Observable<Food>{
    return this.http.post<Food>(environment.apiAdress + 'food/add', food);
  }

  public update(food: Food): Observable<Food>{
    return this.http.put<Food>(environment.apiAdress + 'food/update', food);
  }

  public delete(foodId: number): Observable<void>{
    return this.http.delete<void>(environment.apiAdress + 'food/delete/' + foodId);
  }
}
