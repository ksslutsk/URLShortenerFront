import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
const routes: Routes = [
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "auth",
    component: AuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
