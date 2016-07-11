import {RouteParams} from "angular2/router";
declare let __moduleName: string;
import {Component, OnInit} from "angular2/core";
import {Recipe} from "../../shared/recipe";
import {RecipeService} from "../recipe.service";

@Component({
    moduleId: __moduleName,
    templateUrl: 'recipe-detail.html',
    providers: [RecipeService]
})

export class RecipeDetailComponent implements OnInit{
    recipe: Recipe;
    private _recipeIndex: string;
    constructor(private _routeParams:RouteParams, private _recipeService: RecipeService){};
    ngOnInit(): any{
        let itemIndex = this._routeParams.get('recipeIndex');

        this._recipeIndex = itemIndex;
        this.recipe = this._recipeService.getItem(itemIndex !== null ? +itemIndex : null) || null;
    }
}