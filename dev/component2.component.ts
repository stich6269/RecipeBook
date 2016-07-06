import {Component} from "angular2/core";
import {Router, CanDeactivate, ComponentInstruction} from "angular2/router";
@Component({
    selector: 'my-component2',
    template: `
        Component 2
        <button (click)="onButton()">Take me to the component 1</button>
    `
})


export class Component2Component implements CanDeactivate{
    constructor(private _router: Router){};
    onButton(): void{
        this._router.navigate(['Component1', {source: 'AppComponent'}]);
    }

    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        return confirm('Do you really wont to live this page?')
    }
}