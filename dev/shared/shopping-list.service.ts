import {Injectable} from "angular2/core";
import {Ingredient} from "./ingredients";
import {SHOPPING_LIST} from "../moc/shopping-list";

@Injectable()
export class ShoppingListService{
    getAllItems(): Ingredient[] {
        return SHOPPING_LIST
    }

    getIndexOfItem(item: Ingredient): number{
        return SHOPPING_LIST.lastIndexOf(item)
    }

    insertItem(item: Ingredient): void{
        SHOPPING_LIST.push(item);
    }

    getItem(index: number): Ingredient{
        return SHOPPING_LIST[index]
    }

    insertItems(items: Ingredient[]): void{
        SHOPPING_LIST.concat(items);
    }

    deleteItem(item: Ingredient): void{
        console.log('currend item', SHOPPING_LIST.indexOf(item))
        SHOPPING_LIST.splice(SHOPPING_LIST.indexOf(item), 1);
    }

    updateItem(index: number, item: Ingredient): void{
        SHOPPING_LIST[index] = item;
    }
}