import {Injectable} from "angular2/core";
import {Recipe} from "./../shared/recipe";
import {RECIPES} from "../moc/recipes";

@Injectable()
export class RecipeService{
    getAllRecipes(): Recipe[] {
        return RECIPES
    }
    getItem(index: number): Recipe{
        return RECIPES[index]
    }
    insertItem(item: Recipe): void{
        RECIPES.push(item);
    }
    getIndexOfItem(item: Recipe): number{
        return RECIPES.lastIndexOf(item)
    }

    deleteItem(item: Recipe): void{
        RECIPES.splice(RECIPES.indexOf(item), 1);
    }

    updateItem(index: number, item: Recipe): void{
        RECIPES[index] = item;
    }
}