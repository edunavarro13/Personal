import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';
import { CurriculumViewComponent } from './curriculum-view/curriculum-view.component';
import { DescriptionViewComponent } from './description-view/description-view.component';

const routes: Routes = [
  { path: 'home', component: PrincipalViewComponent },
  { path: 'projects', component: ProjectViewComponent },
  { path: 'contact', component: ContactViewComponent },
  { path: 'tools', component: LanguagesViewComponent },
  { path: 'curriculum', component: CurriculumViewComponent },
  { path: 'projects/:id', component: DescriptionViewComponent },
  // { path: 'certificateview/:id', component: NewCertificateComponent },
  // { path: 'notifications', component: NotificationsViewComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
