import {Component} from 'angular2/core';
import {PipeComponent} from "./pipe.component";

@Component({
    selector: 'app',
    template: '<pipe-component></pipe-component>',
    directives: [PipeComponent]
})



export class AppComponent{

}
