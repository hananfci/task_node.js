import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing-module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    HomeRoutingModule,    
    SafePipeModule 
    
  ],
  declarations: [ 
    HomeComponent,   
  HeaderComponent,    
  IndexComponent,    
  DashboardComponent,    
  LoginComponent],
exports: [
],
  providers: [
  
  ],
})
export class HomeModule { }
