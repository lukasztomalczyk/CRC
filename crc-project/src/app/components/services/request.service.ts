import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ItemModel } from "../list/item/item.model";
import { of } from "rxjs/observable/of";
import { MockData } from "../../mock.data";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class RequestService {

    constructor(private http: HttpClient) {

    }

    getItems(): Observable<Array<ItemModel>> {
        return of(MockData)
    }

    getSomething() {
        return this.http.get<any>('https://angular2demo-9afa4.firebaseio.com/');
    }

    postSomething() {
        return this.http.put<any>('http://localhost:3000/posts/1', {
        "title": "jdupa",
        "author": "typicode"});
    }

    deleteSomething() {
        return this.http.delete<any>('url', {});
    }

}