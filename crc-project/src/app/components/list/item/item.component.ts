import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemModel;
  
  constructor() { }

  ngOnInit() {
  }

}
