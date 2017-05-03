import { Component, Input, OnInit } from '@angular/core';
import { _tenants } from '../models/tenant.model';

@Component({
  selector: 'app-es-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tenants = _tenants;
  constructr() { }

  ngOnInit() {
  }

}
