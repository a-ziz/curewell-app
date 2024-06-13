import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewSpecializationComponent } from './components/view-specialization/view-specialization.component';
import { ViewTodaySurgeryComponent } from './components/view-today-surgery/view-today-surgery.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'view-doctors', component: ViewDoctorsComponent},
  { path: 'view-specialization', component: ViewSpecializationComponent},
  { path: 'view-today-surgery', component: ViewTodaySurgeryComponent},
  { path: 'add-doctor', component: AddDoctorComponent},

  // { path: '**', component: ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    ViewDoctorsComponent,
    ViewSpecializationComponent,
    ViewTodaySurgeryComponent,
    AddDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
