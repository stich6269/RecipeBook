import {Recipe} from "../../shared/recipe";
declare let __moduleName: string;
import {Component, OnInit} from "angular2/core";
import {RecipeService} from "./../recipe.service";
import {Router} from "angular2/router";

@Component({
    moduleId: __moduleName,
    templateUrl: 'recipe-list.html',
    selector: 'my-recipe-list',
    providers: [RecipeService]
})

export class RecipeListComponent implements OnInit{
    recipes: Recipe[];
    selected: Recipe;
    constructor(private _recipeService: RecipeService, private _route: Router){};
    ngOnInit(): void{
        this.recipes = this._recipeService.getAllRecipes();
    }
    onSelect(item:Recipe): void{
        let index = this._recipeService.getIndexOfItem(item);
        this._route.navigate(['RecipeDetail', {recipeIndex: Number(index)}])
    }
}