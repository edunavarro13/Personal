import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';

const routes: Routes = [
  { path: 'home', component: PrincipalViewComponent },
  { path: 'home#options', component: PrincipalViewComponent },
  { path: 'projects', component: ProjectViewComponent },
  { path: 'contact', component: ContactViewComponent },
  { path: 'tools', component: LanguagesViewComponent },
  // { path: 'login', component: LoginViewComponent },
  // { path: 'certificate/:id', component: CertificateDetailComponent },
  // { path: 'certificateview/:id', component: NewCertificateComponent },
  // { path: 'notifications', component: NotificationsViewComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
