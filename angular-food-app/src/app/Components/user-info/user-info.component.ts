import { UserInfo } from './../../Model/UserInfo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../Service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/auth/authentication.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  username: string;
  userInfo?: UserInfo;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) {
    this.authService.username.subscribe(
      (data: string) => (this.username = data)
    );
    this.username = this.authService.getUserName();
  }

  ngOnInit(): void {
    this.userService.getUserInfo(this.username).subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        this.snackBar.open('User not found', '', { duration: 5000 });
      }
    );
  }

  getImageUrl(image:any){
    return `data:${image.type};base64,${image.bytes}`;
  }

}
