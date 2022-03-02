import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
      children: [ 
      {
         path:'index',
        component: IndexComponent
      },{
        path:"login",
        component:LoginComponent
      },{
        path:"dashboard",
        component:DashboardComponent
      } , {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      ]  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})



  export class HomeRoutingModule { }
  
 
  
