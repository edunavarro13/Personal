import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { HeaderViewComponent } from './header-view/header-view.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';
import { ObjectsService } from './objects.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    ProjectViewComponent,
    ContactViewComponent,
    HeaderViewComponent,
    LanguagesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ObjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
