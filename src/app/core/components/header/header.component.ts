import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  menuItems = [
    {
      route: "/create",
      name: 'Create'
    },
    {
      route: "/",
      name: 'Read'
    },
    {
      route: "/update",
      name: 'Update'
    },
    {
      route: "/delete",
      name: 'Delete'
    },
  ];

  public isMenuCollapsed = true;

  constructor() {}

  ngOnInit(): void {
  }
}
