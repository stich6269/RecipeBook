import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {RecipeComponent} from "./recipe-book/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <ul>
                    <li><a [routerLink]="['Recipes22']">Recipes</a></li>
                    <li><a [routerLink]="['ShoppingList']">Shopping list</a></li>
                </ul>
            </nav>
        </header>
        
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]

})

@RouteConfig([
    {path: '/recipes', name: 'Recipes22', component: RecipeComponent, useAsDefault: true},
    {path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent}
])

export class AppComponent{

}
