import {Component} from "angular2/core";
import {CalculateService} from "./services/calculate.service";
import {DataService} from "./services/data.service";

@Component({
    selector: 'component-1',
    providers: [CalculateService, DataService],
    template: `
        <h1>Data service</h1>
        <button (click)="onGetData()">GetData</button>
        <div>{{data}}</div>
        <input type="text" #item>
        <button (click)="onAdd(item.value)">Add</button>
        
    `
})
export class Component1Component{
    result: number = 0;
    data: string;

    constructor(private _calc: CalculateService, private _dataService: DataService){};
    onMultiply(num1: string, num2: string): void{
        this.result = this._calc.multiply(+num1, +num2);
    }
    onAdd(num1: string, num2: string): void{
        this.result = this._calc.add(+num1, +num2);
    }
    onGetData(): void{
        this.data = this._dataService.getRandomsString();
    }
    onAdd(item: string): void{
        this._dataService.insert(item);
    }
}