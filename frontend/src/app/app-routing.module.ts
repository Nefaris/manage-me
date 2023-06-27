import { FunctionalitiesPageComponent } from './routes/functionalities-page/functionalities-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { FunctionalityDetailsPageComponent } from './routes/functionality-details-page/functionality-details-page.component';
import { CreateFunctionalityPageComponent } from './routes/create-functionality-page/create-functionality-page.component';
import { CreateTaskPageComponent } from './routes/create-task-page/create-task-page.component';
import { TaskDetailsPageComponent } from './routes/task-details-page/task-details-page.component';
import { EditTaskPageComponent } from './routes/edit-task-page/edit-task-page.component';
import { EditFunctionalityPageComponent } from './routes/edit-functionality-page/edit-functionality-page.component';

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
  {
    path: 'functionalities/:id/create-task',
    component: CreateTaskPageComponent,
  },
  {
    path: 'functionalities/:id/edit',
    component: EditFunctionalityPageComponent,
  },
  {
    path: 'functionalities/:id/task/:taskId',
    component: TaskDetailsPageComponent,
  },
  {
    path: 'functionalities/:id/task/:taskId/edit',
    component: EditTaskPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
