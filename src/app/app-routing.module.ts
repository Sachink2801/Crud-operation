import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
 {path:'', loadChildren:()=> import('../app/users/users.module').then(m=>m.UsersModule)},
 {path:'list', loadChildren:()=> import('../app/table-list/table-list.module').then(m=>m.TableListModule),canActivate:[authGuard]},
 {path:'**', component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
