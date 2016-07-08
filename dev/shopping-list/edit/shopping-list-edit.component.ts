import {Ingredient} from "../../shared/ingredients";
declare let __moduleName: string;
import {Component} from "angular2/core";
import {ShoppingListService} from "../../shared/shopping-list.service";

@Component({
    moduleId: __moduleName,
    selector: 'my-shopping-list-edit',
    inputs: ['ingredient'],
    styleUrls: ['../../../src/css/shopping-list.css'],
    templateUrl: 'shopping-list-edit.html',
    providers: [ShoppingListService]
})

export class ShoppingListEditComponent{
    ingredient: Ingredient;
    constructor(private _shoppingListService: ShoppingListService){};
    onSubmit(item: Ingredient): void{
        let index = this._shoppingListService.getIndexOfItem(this.ingredient);
        if(this.ingredient){
            this._shoppingListService.updateItem(index, item);
        }else {
            this._shoppingListService.insertItem(item);
            this.ingredient = item;
        }
    };

    onDelete(){
        this._shoppingListService.deleteItem(this.ingredient)
    }
}