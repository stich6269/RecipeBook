import {RecipeListComponent} from "./list/recipe-list.component";
declare let __moduleName: string;
import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {RecipeDetailComponent} from "./detail/recipe-detail.component";

@Component({
    moduleId: __moduleName,
    templateUrl: 'recipe.html',
    directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true},
    {path: '/:editMode', name: 'RecipeEdit', component: RecipeDetailComponent}
])

export class RecipeComponent{
    
}