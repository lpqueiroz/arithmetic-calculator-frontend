import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { UserRecordsComponent } from './user-records/user-records.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new-operation', component: NewOperationComponent, canActivate: [AuthGuard] },
  { path: 'user-records', component: UserRecordsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
