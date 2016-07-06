import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'app',
    template: `
        <header>
            <ul>
                <a [routerLink]="['Component1', {source: 'AppComponent', optional: 'This is optional'}]">First</a>
                <a [routerLink]="['Component2']">Second</a>
            </ul>
        </header>
        
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/component-1:source/...', name: 'Component1', component: Component1Component},
    {path:'/component-2', name: 'Component2', component: Component2Component}
])

export class AppComponent{

}
