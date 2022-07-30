import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsCreateComponent } from './components/jobs/jobs-create/jobs-create.component';
import { JobsDeleteComponent } from './components/jobs/jobs-delete/jobs-delete.component';
import { JobsUpdateComponent } from './components/jobs/jobs-update/jobs-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { JobsComponent } from './components/views/jobs/jobs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'jobs/create', component: JobsCreateComponent},
  {path: 'jobs/update/:id', component: JobsUpdateComponent},
  {path: 'jobs/delete/:id', component: JobsDeleteComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
