import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { TagService } from './services/tag.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    // My Modules
    AppMaterialModule,
    // Services
    HttpClientModule,
  ],
  providers: [AuthGuard, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }