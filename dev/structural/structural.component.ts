import {Component} from "angular2/core";
import {UnlessDirective} from "../unless.directive";

@Component({
    selector: 'my-structural-directives',
    template: `
        <section class="directive">
            <h2>*hgIf</h2>
            <div> Enter a number higher than 10</div>
            <input type="text" #number (keyup)="0">
            <div *ngIf="number.value > 10">Number is greater than 10</div>    
        </section>
        
        
        <section class="directive">
            <h2>*hgFor</h2>
            <div>
                <ul>
                    <li *ngFor="#item of list, #i=index">{{i}} {{item}}</li>
                </ul>
            </div>
        </section>
        
        <section class="directive">
            <h2>[ngSwitch]</h2>
            <div>
                Enter red, blue, or green
                <br>
                <input type="text" #color (keyup)="0">
            </div>
            
            <div [ngSwitch]="color.value">
                  <template [ngSwitchWhen]="'red'" ]>
                       <span style="color: red">Color is red</span>                  
                  </template>     
                  <template [ngSwitchWhen]="'blue'" ]>
                       <span style="color: blue">Color is blue</span>                  
                  </template>     
                  <template [ngSwitchWhen]="'green'" ]>
                       <span style="color: green">Color is green</span>                  
                  </template>     
                  <template ngSwitchDefault>
                       <span>Don't know this color</span>                  
                  </template>    
            </div>
        </section>
        
        
        <section class="directives">
            <h2>Custom structural directives *myOnless</h2>
            <div>
                Enter true or false
                <br>
                <input type="text" (keyup)="0" #condition>
            </div>
            <div *myUnless="condition.value != 'false'">
                Only show when condition is false
            </div>
        </section>
    `,
    directives: [UnlessDirective]
})

export class StructuralDirectives{
    list: String[] = ['Apple', 'Milk', 'Bread', 'Orange']
}