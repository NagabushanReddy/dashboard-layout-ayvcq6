import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IconBarChart2, IconSearch } from 'angular-feather';

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  imports: [BrowserModule, FormsModule, IconBarChart2, IconSearch],
  declarations: [
    AppComponent,
    SideNavigationComponent,
    TopNavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
