import {Component} from "angular2/core";

@Component({
    selector: 'my-binding',
    template: `
        <h3>This is the child component</h3>
        Hey! {{name}}, i'm {{age}} years old
    `,
    inputs: ['name', 'age']
})

export class BindingComponent {
    
}
