import { Component, OnInit } from '@angular/core';
import { MenuModel } from './menu-position.model';
import { MenuPositions } from './menu-positions.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuPositions: Array<MenuModel>;

  constructor() { }

  ngOnInit() {
    this.menuPositions = MenuPositions;
  }
}
