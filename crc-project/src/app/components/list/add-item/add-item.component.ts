import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../list.service';
import { AddItemModel } from './add-item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name: string;
  description: string;

  constructor(private itemListService: ItemListService) {

  }

  ngOnInit() {
  }

  add() {
    let itemToAdd: AddItemModel;
    itemToAdd = new AddItemModel(this.name, this.description);
    this.itemListService.addItemSuject.next(itemToAdd);
  }

}
