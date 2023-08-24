import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HederComponent } from '../heder/heder.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [UsersComponent,HomeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class UsersModule { }
