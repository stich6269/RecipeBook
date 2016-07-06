import {Component, OnInit} from "angular2/core";
import {NewShoppingListComponent} from "./new-shopping-list-item.component";
import {ListItem} from './models/list-item'
import {ShoppingListItemComponent} from "./chopping-list-item.component";
import {DataService} from "./services/data.services";
import {FilterPipe} from "./pipes/filter.pipe";

@Component({
    selector: 'shopping-list',
    template: `    
        <section>
            <shopping-list-new-item></shopping-list-new-item>
        </section>
        <section>
            <h3>My list</h3>
            Filter:
            <input type="text" #filter (keyup)="0">
            
            
            <div class="list">
                <ul>
                    <li *ngFor="#item of listItems | myFilter:filter.value" (click)="onSelect(item)">{{item.name}} ({{item.amount}})</li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
                <shopping-list-item (remove)="onRemove($event)" [item]="selectedItem"></shopping-list-item>
        </section>
    `,
    pipes: [FilterPipe],
    directives: [NewShoppingListComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent implements OnInit{
    listItems: ListItem[];
    selectedItem: ListItem;
    
    constructor(private _dataService: DataService){}
    
    ngOnInit():void {
        this.listItems = this._dataService.getItems();
    }
    onSelect(item: ListItem){
        this.selectedItem = item;
    }
    onRemove(item: ListItem){
        this._dataService.deleteItem(item);
        this.selectedItem = null;
    }
}