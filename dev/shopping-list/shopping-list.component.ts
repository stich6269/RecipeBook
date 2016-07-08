import {Component, OnInit} from "angular2/core";
import {ShoppingListEditComponent} from "./edit/shopping-list-edit.component";
import {Ingredient} from "../shared/ingredients";
import {ShoppingListService} from "../shared/shopping-list.service";
declare let __moduleName: string;

@Component({
    moduleId: __moduleName,
    templateUrl: 'shopping-list.html',
    directives: [ShoppingListEditComponent],
    providers: [ShoppingListService]
})

export class ShoppingListComponent  implements OnInit{
    shoppingList: Ingredient[];
    selected: Ingredient;
    constructor(private _shoppingListService: ShoppingListService){};
    ngOnInit():void {
        this.shoppingList = this._shoppingListService.getAllItems();
    }
    onAddItem(): void{
        this.selected = null;
    }
    onEdit(item: Ingredient): void{
        this.selected = item;
    }
}

