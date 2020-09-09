import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './layouts/search/search.component';
import { AvailComponent } from './avail/avail.component';
import { DeleteComponent } from './layouts/delete/delete.component';
import { AddnewComponent } from './layouts/addnew/addnew.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { AboutComponent } from './layouts/about/about.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'avail', component:AvailComponent},
  {path:'delete', component:DeleteComponent},
  {path:'addnew', component:AddnewComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
