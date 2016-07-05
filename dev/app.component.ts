import {Component} from 'angular2/core';
import {DataDrivenFormComponent} from "./data-driven-form.component";

@Component({
    selector: 'app',
    directives: [DataDrivenFormComponent],
    template: `
       <template-driven-form></template-driven-form>
    `,
})

export class AppComponent{

}
