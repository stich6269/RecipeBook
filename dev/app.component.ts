import {Component} from 'angular2/core';
import {BindingComponent} from './binding/binding.component'

@Component({
    selector: 'app',
    template: `
        <section class="parent">
            <h2>This is the parent component</h2>
            <h4>Please enter your name</h4>
            <input type="text" [(ngModel)]="name">
            <section class="child">
                <my-binding [name]="name" [age]="26"></my-binding>
            </section>
        </section>
    `,
    directives: [BindingComponent]
})


export class AppComponent{
    name: string = '';
}
