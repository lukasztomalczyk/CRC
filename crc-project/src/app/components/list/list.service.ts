import { Injectable } from "@angular/core";
import { ItemModel } from "./item/item.model";
import { MockData } from "../../mock.data";
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { AddItemModel } from "./add-item/add-item.model";

@Injectable()
export class ItemListService {

    addItemSuject: Subject<AddItemModel>;

    constructor() {
        this.addItemSuject = new Subject<AddItemModel>();
    }

}