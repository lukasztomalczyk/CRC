import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item/item.model';
import { ItemListService } from './list.service';
import { RequestService } from '../services/request.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemList: Array<ItemModel>;

  constructor(private itemListService: ItemListService,
              private requestService:RequestService) { }

  ngOnInit() {
    this.requestService.getItems().subscribe((data) => {
      this.itemList = data;
    })

    this.itemListService.addItemSuject.subscribe((data) => {
      let item = new ItemModel(this.itemList.length + 1, data.name, data.description)
      this.itemList.push(item);
    })

    this.requestService.getSomething().subscribe((data)=>{
        console.log(data);
    })
  }

}
