import {Component, EventEmitter} from "angular2/core";

@Component({
    selector: 'my-details',
    template: `
        <h2>Yor details, please</h2>
        Your name:
        <input type="text" [(ngModel)]="mySelf.name" (keyup)="onName(name.value)" #name><br>
        <br>
        Your age: 
        <input type="text" [(ngModel)]="mySelf.age" (keyup)="onAge(age.value)" #age>
        <br><br>
        Filed out: {{isFilled ? 'YES': 'NO'}} 
        <br>
        Valid: {{isValid ? 'YES': 'NO'}} 
        <br><br>
        <br><br>
        <button [disabled]="!isFilled || !isValid" (click)="onSubmit()" >Submit</button>
    `,
    outputs: ['submitEvent'],
    inputs: ['mySelf']
})

export class DetailsComponent{
    isFilled: boolean = false;
    isValid: boolean = false;
    mySelf = {name: '', age: 0};
    submitEvent = new EventEmitter<{name: string, age: number}>();

    onName(name:string): void{
        this.mySelf.name = name;
        this.isFilled = !!(this.mySelf.name && this.mySelf.age)
    }

    onAge(age: string): void{
        this.mySelf.age = parseInt(age);
        this.isFilled = !!(this.mySelf.name && this.mySelf.age);
        this.isValid = this.mySelf.age && this.mySelf.age > 10
    }

    onSubmit(): void{
        this.submitEvent.emit(this.mySelf)
    }
}
