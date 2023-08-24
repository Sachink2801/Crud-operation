import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  public buttonText: String = 'Submit';
  userForm: FormGroup;
  users: any;

  constructor(private router: Router, private commonService: CommonService) {
    this.userForm = new FormGroup({
      userid: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Name: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      Mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      Age: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.commonService.Data().subscribe((user: any) => {
      this.userForm.reset();
      if (user && user['type'] === 'edit') {
        this.buttonText = 'Update';
        this.userForm.patchValue(user['data']);
      }
    });
  }

  submitForm() {
    this.commonService.AddUpdateUser().subscribe((data: any) => {
      alert('Added');
      this.userForm.reset();
      this.getAllUsers();
      console.log(data);
    });
  }

  getAllUsers() {
    this.commonService.getAllUsers().subscribe((data) => {
      console.log('users', data);
      this.users = data;
    });
  }

  onSubmit() {
    let user = this.userForm.value;
    if (user.Name == 'sachin') {
      localStorage.setItem('isLogedin', 'true');
    } else {
      localStorage.setItem('isLogedin', 'false');
    }
    if (this.buttonText.toLowerCase() === 'update') {
      let userAllData: any = localStorage.getItem('userData');
      let userArray: any[] = (userAllData = JSON.parse(userAllData));
      userArray
        .filter((data) => data.userid == user['userid'])
        .map((opt) => {
          Object.assign(opt, user);
        });
      localStorage.setItem('userData', JSON.stringify(userArray));
      this.router.navigateByUrl('/list');
    } else {
      this.buttonText = 'Add';
      user.userid = Math.floor(1000 + Math.random() * 9000);
      let userAllData: any = localStorage.getItem('userData');
      let userArray: any[] = (userAllData = JSON.parse(userAllData));
      userArray.push(user);
      localStorage.setItem('userData', JSON.stringify(userArray));
      this.router.navigateByUrl('/list');
    }
  }
}
