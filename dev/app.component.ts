import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <!--string interpolation-->
        <input type="text" value="{{'Artem'}}">
        <br><br><br>
        
        <!--property binding-->
        <input type="text" [value]="name" [ngClass]="{red: true}">
        <br><br><br>
        
        <!--event binding-->
        <input type="text" (keyup)="onKey(nameInp.value)" #nameInp>
        <p>{{resultStr}}</p>
        <br><br><br>
        
        <!--two ways binding-->
        <input type="text" [(ngModel)]="name">
        <p>Your name: {{name}}</p>
    `,
    directives: []
})


export class AppComponent{
    name: string = 'Artem';
    resultStr: string = '';

    onKey(keyValue: string): void{
        this.resultStr += keyValue + ' | ';
    }
}
