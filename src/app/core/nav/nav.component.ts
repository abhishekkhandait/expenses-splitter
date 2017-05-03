import { Component, OnInit } from '@angular/core';

class MenuItems {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-es-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: MenuItems[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: '', link: ['/categories'] }
    ];
  }
}
