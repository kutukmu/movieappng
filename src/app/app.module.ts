import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortenPipe } from './components/pipes/shorten.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MovieformComponent } from './components/movieform/movieform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './components/movies/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffect } from './components/movies/store/movies.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './components/auth/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AuthEffects } from './components/auth/login/store/auth.effects';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UsernamePipe } from './components/pipes/username.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { CreatemovieComponent } from './components/movies/createmovie/createmovie.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthInterceptor } from './components/auth/auth.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './CustomSerializer';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    ShortenPipe,
    MoviedetailsComponent,
    MovieformComponent,
    LoginComponent,
    UsernamePipe,
    ProfileComponent,
    CreatemovieComponent
  ],
  imports: [
    StoreRouterConnectingModule.forRoot({
      serializer:CustomSerializer
    }),
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MoviesEffect, AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
