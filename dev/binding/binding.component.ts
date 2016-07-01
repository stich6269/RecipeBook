import {Component, EventEmitter} from "angular2/core";

@Component({
    selector: 'my-binding',
    template: `
        <h3>This is the child component</h3>
        Hey! {{name}}, i'm {{age}} years old
        <br><br>
        End my hobby is:
        <br>
        <input type="text" (keyup)="onKey(hobby.value)" #hobby>
    `,
    inputs: ['name', 'age'],
    outputs: ['fieldEvent']
})

export class BindingComponent {
    fieldEvent = new EventEmitter<string>();
    onKey(hobby: string){
        this.fieldEvent.emit(hobby);
    }
}
