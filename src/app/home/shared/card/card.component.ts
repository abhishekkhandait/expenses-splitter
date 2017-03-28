import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from '../../../models/tenant.model';

@Component({
  moduleId: module.id,
  selector: 'es-home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() _tenant: Tenant;

  constructor() { }

  setBg() {
    return { 'background': 'url(' + this._tenant.banner + ')' };
  }
}
