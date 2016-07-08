import {Ingredient} from "../../shared/ingredients";
declare let __moduleName: string;
import {Component} from "angular2/core";

@Component({
    moduleId: __moduleName,
    selector: 'my-shopping-list-edit',
    inputs: ['ingredient'],
    styleUrls: ['../../../src/css/shopping-list.css'],
    templateUrl: 'shopping-list-edit.html'
})

export class ShoppingListEditComponent{
    ingredient: Ingredient;
}