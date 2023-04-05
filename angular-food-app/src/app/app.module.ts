import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './Components/account/account.component';
import { AddFoodDialogComponent } from './Components/add-food-dialog/add-food-dialog.component';
import { CartComponent } from './Components/cart/cart.component';
import { EditFoodDialogComponent } from './Components/edit-food-dialog/edit-food-dialog.component';
import { FoodPanelComponent } from './Components/food-panel/food-panel.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { TokenInterceptor } from './token-interceptor';
import { MatTabsModule } from '@angular/material/tabs';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { RemoveFoodDialogComponent } from './Components/remove-food-dialog/remove-food-dialog.component';
import { PresentationPageComponent } from './Components/presentation-page/presentation-page.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    HeaderComponent,
    FoodPanelComponent,
    AddFoodDialogComponent,
    AccountComponent,
    EditFoodDialogComponent,
    CartComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    RemoveFoodDialogComponent,
    PresentationPageComponent,
    FooterComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
