import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MenuComponent } from './menu/menu.component';

//
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from './requests.service'
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allusers', component: AllUsersComponent },
  { path: 'profile', component: ProfilesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllUsersComponent,
    ProfilesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  exports: [
    RouterModule 
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
