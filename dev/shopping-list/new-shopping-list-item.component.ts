import {Component} from "angular2/core";
import {DataService} from "./services/data.services";

@Component({
    selector: 'shopping-list-new-item',
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
    constructor(private _dataService: DataService){};
    onAddItem(): void{
        if(this.item.name && this.item.amount){
            this._dataService.insertItem(this.item);
            this.item = {name: '', amount: 0};
        }else{
            alert('Complete the fields and try again')
        }
    }
}