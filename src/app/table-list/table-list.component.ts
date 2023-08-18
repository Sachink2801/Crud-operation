import { Component } from '@angular/core';
import { userData } from './table.module';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent {
  users: userData[] = [];

  constructor(private router: Router, private commonService: CommonService) {
    let userInfo: any = localStorage.getItem('userData');
    if (!userInfo) {
      this.commonService.getAllUsers().subscribe((users) => {
        this.users = users.data;
        localStorage.setItem('userData', JSON.stringify(users.data));
      });
    }
    this.users = JSON.parse(userInfo);
    console.log(this.users);
  }

  ngOnInit(): void {}

  editUser(data: userData, id: number) {
    let formData = {
      data: data,
      type: 'edit',
    };
    this.commonService.userData.next(formData);
    console.log('formmm', formData);
    this.router.navigateByUrl('/');
  }

  // editUser(data:userData,id:number){

  // }

  deleteUser(data: userData, id: number) {
    this.users = this.users.filter((user) => user != data);
    localStorage.setItem('userData', JSON.stringify(this.users));
  }
}
