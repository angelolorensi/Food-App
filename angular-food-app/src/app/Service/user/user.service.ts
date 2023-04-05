import { PasswordChangeRequest } from './../../Components/change-password/change-passwordRequestPayload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from 'src/app/Model/User';
import { UserInfo } from 'src/app/Model/UserInfo';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<User[]>{
    return this.http.get<User[]>(environment.apiAdress + 'user/find/all');
  }

  public getById(userId:number): Observable<User>{
    return this.http.get<User>(environment.apiAdress + 'user/find/id/' + userId);
  }

  public getByUsername(username:string): Observable<User>{
    return this.http.get<User>(environment.apiAdress + 'user/find/name/' + username);
  }

  public getUserInfo(username:string): Observable<UserInfo>{
    return this.http.get<UserInfo>(environment.apiAdress + 'user/find/userinfo/' + username);
  }

  public add(user: User): Observable<User>{
    return this.http.post<User>(environment.apiAdress + 'user/add', user);
  }

  public update(user: User): Observable<User>{
    return this.http.put<User>(environment.apiAdress + 'user/update', user);
  }

  public delete(userId: number): Observable<void>{
    return this.http.delete<void>(environment.apiAdress + 'user/delete/' + userId);
  }

  public forgetPassword(email: string){
    return this.http.post(environment.apiAdress + 'user/forgot-password', email, { responseType:'text'});
  }

  public changePassword(request:PasswordChangeRequest){
    return this.http.post(environment.apiAdress + 'user/change-password', request, {responseType:'text'});
  }
}
