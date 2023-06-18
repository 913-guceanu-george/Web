import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBrowsingComponent } from './user-browsing/user-browsing.component';
import { UserLookupComponent } from './user-lookup/user-lookup.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'user-browsing', component: UserBrowsingComponent },
  { path: 'user-lookup', component: UserLookupComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: '', redirectTo: '/user-browsing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
