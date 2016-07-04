import {Component, EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";

@Component({
    selector: 'shopping-list-item',
    inputs: ['item'],
    outputs: ['remove'],
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        
        <div class="input">
            <label for="item-amount">Amount</label>
            <input type="text" id="item-amount" [(ngModel)]="item.amount">
        </div>
        
        <button class="danger" (click)="onDelete()">Delete</button>
    `
})

export class ShoppingListItemComponent{
    item = {name: '', amount: 0};
    remove: EventEmitter = new EventEmitter<ListItem>();
    onDelete(item: ListItem): void{
        this.remove.emit(item);
        this.item = {name: '', amount: 0};
    }
}