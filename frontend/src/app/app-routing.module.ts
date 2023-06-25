import { FunctionalitiesPageComponent } from './routes/functionalities-page/functionalities-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { FunctionalityDetailsPageComponent } from './routes/functionality-details-page/functionality-details-page.component';
import { CreateFunctionalityPageComponent } from './routes/create-functionality-page/create-functionality-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'functionalities',
    component: FunctionalitiesPageComponent,
  },
  {
    path: 'functionalities/:id/details',
    component: FunctionalityDetailsPageComponent,
  },
  {
    path: 'functionalities/create',
    component: CreateFunctionalityPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
