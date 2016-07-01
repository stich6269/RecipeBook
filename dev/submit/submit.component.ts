import {Component, EventEmitter} from "angular2/core";

@Component({
    selector: 'my-submit',
    template: `
        <h2>You submitted the following. Is this correct?</h2>
        <p>Your name is {{mySelf.name}} and you are {{mySelf.age}} years old. Please on Confirm your details.
        You may change them before you du so.</p>
        Name
        <input type="text" [(ngModel)]="mySelf.name" (keyup)="onName(name.value)" #name><br>
        Age: 
        <input type="text" [(ngModel)]="mySelf.age" (keyup)="onAge(age.value)" #age>
        <br><br>
        Filed out: {{isFilled ? 'YES': 'NO'}}<br> 
        Valid: {{isValid ? 'YES': 'NO'}} 
        <br><br>
        <button [disabled]="!isFilled || !isValid" (click)="onSubmit()">Confirm</button>
    `,
    inputs: ['mySelf'],
    outputs: ['confirmEvent']
})

export class SubmitComponent{
    isFilled: boolean = false;
    isValid: boolean = false;
    mySelf = {name: '', age: 0};
    confirmEvent = new EventEmitter<{name: string, age: number}>();

    onName(name:string): void{
        this.mySelf.name = name;
        this.isFilled = this.mySelf.name && this.mySelf.age
    }

    onAge(age: string): void{
        this.mySelf.age = parseInt(age);
        this.isFilled = this.mySelf.name && this.mySelf.age;
        this.isValid = this.mySelf.age && this.mySelf.age > 10
    }

    onSubmit(): void{
        this.confirmEvent.emit(this.mySelf)
    }
}
