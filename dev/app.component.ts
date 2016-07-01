import {Component} from 'angular2/core';
import {DetailsComponent} from './details/details.component'
import {SubmitComponent} from './submit/submit.component'


@Component({
    selector: 'app',
    template: `
       <my-details [mySelf]="confirmMySelf" (submitEvent)="onSubmit($event)"  class="component"></my-details>
       <my-submit  [mySelf]="mySelf" (confirmEvent)="onConfirm($event)"  class="component"></my-submit>
    `,
    directives: [SubmitComponent, DetailsComponent]
})


export class AppComponent{
    mySelf = {name:'', age: 0};
    confirmMySelf  = {name:'', age: 0};

    onSubmit(myself: {name: string, age: number}): void{
        this.mySelf = {
            name: myself.name,
            age: myself.age
        };
    }

    onConfirm(myself: {name: string, age: number}): void{
        this.confirmMySelf = {
            name: myself.name,
            age: myself.age
        };
        
        console.log('app confirm', this.confirmMySelf)
    }
}
