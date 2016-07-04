import {Component, EventEmitter} from "angular2/core";
import {ListItem} from './../list-item'

@Component({
    selector: 'shopping-list-new-item',
    outputs: ['addNewItem'],
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        
        <div class="input">
            <label for="item-amount">Amount</label>
            <input type="text" id="item-amount" [(ngModel)]="item.amount">
        </div>
        
        <button (click)="onAddItem()">Add Item</button>
    `
})

export class NewShoppingListComponent{
    item = {name: '', amount: 0};
    addNewItem: EventEmitter = new EventEmitter<ListItem>();
    onAddItem(): void{
        if(this.item.name && this.item.amount){
            this.addNewItem.emit(this.item);
            this.item = {name: '', amount: 0};
        }else{
            alert('Complete the fields and try again')
        }
    }
}