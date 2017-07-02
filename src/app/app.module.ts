import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeroListComponent } from './components/home-page/hero-list/hero-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import {HeroService} from "./services/hero.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    MainMenuComponent,
    HeroListComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
