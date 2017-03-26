import { Component, OnInit } from '@angular/core';

class MenuItems {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'es-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: MenuItems[];

  constructor() { }
  
  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Categories', link: ['/categories'] }
    ];
  }
}
