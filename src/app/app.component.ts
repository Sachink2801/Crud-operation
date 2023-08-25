import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crud-concept';

  showHeader = true;
  constructor(private router: Router) {
    localStorage.setItem('isLogedin', 'false');

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/list' || val.url == '/') {
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }
      }
    });
  }

  ngOnInit(): void {}
}
