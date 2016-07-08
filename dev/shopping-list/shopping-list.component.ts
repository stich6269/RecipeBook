import {Component, OnInit} from "angular2/core";
import {ShoppingListEditComponent} from "./edit/shopping-list-edit.component";
import {SHOPPING_LIST} from "../moc/shopping-list";
import {Ingredient} from "../shared/ingredients";
declare let __moduleName: string;

@Component({
    moduleId: __moduleName,
    templateUrl: 'shopping-list.html',
    directives: [ShoppingListEditComponent]
})

export class ShoppingListComponent  implements OnInit{
    shoppingList: Ingredient[];
    selected: Ingredient = {name: '', amount: 0};
    ngOnInit():void {
        this.shoppingList = SHOPPING_LIST;
    }
    onEdit(item: Ingredient): void{

    }
}

