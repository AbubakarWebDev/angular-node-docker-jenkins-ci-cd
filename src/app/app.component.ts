import { Component, isDevMode, OnDestroy, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  event$;
  currentRoute: string;
  pageTitle = {
    "/": "ALL DATABASE RECORDS",
    "/create": "CREATE USERS RECORDS",
    "/delete": "DELETE USER RECORDS",
    "/update": "UPDATE USER RECORDS",
  };

  constructor(private router: Router) {
    this.currentRoute = router.url;
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = router.url;
      }
    });
    
    console.log(environment);
  }

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } 
    else {
      console.log('Production!');
    }
  }

  getCurrentPageTitle() {
    return this.pageTitle[this.currentRoute as keyof typeof this.pageTitle];
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
