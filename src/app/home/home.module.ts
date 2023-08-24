import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HederComponent } from '../heder/heder.component';




@NgModule({
  declarations: [HomeComponent,HederComponent],
  imports: [
    CommonModule
  
  ]

})
export class HomeModule { }
