import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchComponent } from './layouts/search/search.component';
import { AvailComponent } from './avail/avail.component';
import { DeleteComponent } from './layouts/delete/delete.component';
import { AddnewComponent } from './layouts/addnew/addnew.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { AboutComponent } from './layouts/about/about.component';
import { SpringCompComponent } from './layouts/add/spring-comp/spring-comp.component';
import { CoilingCompComponent } from './layouts/add/coiling-comp/coiling-comp.component';
import { GrindingCompComponent } from './layouts/add/grinding-comp/grinding-comp.component';
import { ChamferingCompComponent } from './layouts/add/chamfering-comp/chamfering-comp.component';
import { SpccCompComponent } from './layouts/add/spcc-comp/spcc-comp.component';
import { HpsCompComponent } from './layouts/add/hps-comp/hps-comp.component';
import { ProductionCompComponent } from './layouts/add/production-comp/production-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    SearchComponent,
    AvailComponent,
    DeleteComponent,
    AddnewComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    SpringCompComponent,
    CoilingCompComponent,
    GrindingCompComponent,
    ChamferingCompComponent,
    SpccCompComponent,
    HpsCompComponent,
    ProductionCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
