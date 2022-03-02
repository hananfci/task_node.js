import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/home.module')
      .then(m => m.HomeModule)
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
