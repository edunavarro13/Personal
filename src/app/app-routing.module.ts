import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  { path: 'home', component: PrincipalViewComponent },
  { path: 'projects', component: ProjectViewComponent },
  // { path: 'user', component: UserViewComponent },
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
