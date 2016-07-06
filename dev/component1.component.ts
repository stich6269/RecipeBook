import {Component, OnInit} from "angular2/core";
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Component1Main} from "./component1-mein.component";
import {Component1Sub} from "./component1-sub.component";
@Component({
    template: `
        My component 1
        <div>
            Source was {{source}}
        </div>
        <div>
            Optional {{optional}}
        </div>
        
        <ul>
            <a [routerLink]="['ComponentMain']">ComponentMain</a>
            <a [routerLink]="['ComponentSub']">ComponentSub</a>
        </ul>
        
        
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'ComponentMain', component: Component1Main, useAsDefault: true},
    {path: '/subroute', name: 'ComponentSub', component: Component1Sub}
])

export class Component1Component implements OnInit{
    source: string;
    optional: string;
    constructor(private _routerParams: RouteParams){};
    ngOnInit(): void{
        this.source = this._routerParams.get('source');
        this.optional = this._routerParams.get('optional');
    }
}