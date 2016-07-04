import {Component} from "angular2/core";
import {NewShoppingListComponent} from "./new-shopping-list-item.component";
import {ListItem} from './../list-item'
import {ShoppingListItemComponent} from "./chopping-list-item.component";

@Component({
    selector: 'shopping-list',
    template: `    
        <section>
            <shopping-list-new-item (addNewItem)="addNewItem($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My list</h3>
            <div class="list">
                <ul>
                    <li *ngFor="#item of listItems" (click)="onSelect(item)">{{item.name}} ({{item.amount}})</li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
                <shopping-list-item (remove)="onRemove($event)" [item]="selectedItem"></shopping-list-item>
        </section>
    `,
    directives: [NewShoppingListComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent{
    listItems = new Array<ListItem>();
    selectedItem: ListItem;
    addNewItem(item: ListItem): void{
        this.listItems.push({name: item.name, amount: item.amount});
    }
    onSelect(item: ListItem){
        this.selectedItem = item;
    }
    onRemove(item: ListItem){
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }
}