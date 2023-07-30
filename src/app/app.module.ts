import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ComicsModule } from './comics/comics.module';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { httpInterceptorProviders } from './http-interceptors';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './standalone/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    ComicsModule,
    HeroesModule,
    NavbarComponent,
    SharedModule,
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
