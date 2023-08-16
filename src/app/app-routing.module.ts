import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'list', component: TableListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
