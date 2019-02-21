import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { HeaderViewComponent } from './header-view/header-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    ProjectViewComponent,
    ContactViewComponent,
    HeaderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
