import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive'
import {StructuralDirectives} from "./structural/structural.component";

@Component({
    selector: 'app',
    template: `
        <div myHighlight [highlightColor]="'cyan'">
            Highlight me
        </div>        
        <br>
        <div myHighlight>
            Another highlight me
        </div>
        <br>
        <h2>Structural directives</h2>
        <my-structural-directives></my-structural-directives>
    `,
    directives: [HighlightDirective, StructuralDirectives]
})


export class AppComponent{

}
