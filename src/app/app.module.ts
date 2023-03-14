import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } 
  from '@angular/forms';
import { NovaComponent } from './nova/nova.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
