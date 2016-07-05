import {Component, OnInit} from "angular2/core";
import {DataService} from "./services/data.services";
import {ControlGroup, FormBuilder, Validators, Control} from "angular2/common";

@Component({
    selector: 'shopping-list-new-item',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div class="input">
                <label for="item-name">Name</label>
                <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
            </div>
            
            <div class="input">
                <label for="item-amount">Amount</label>
                <input type="text" id="item-amount" [(ngModel)]="item.amount"  [ngFormControl]="myForm.controls['amount']">
            </div>
            
            <button type="submit" [disabled]="!myForm.valid">Add Item</button>
        </form>
        
    `
})

export class NewShoppingListComponent implements OnInit{
    item = {name: '', amount: 0};
    myForm: ControlGroup;
    constructor(private _dataService: DataService, private _formBuilder: FormBuilder){};
    onSubmit(){
        this._dataService.insertItem(this.item);
        console.log(this.item);
        this.item = {name: '', amount: 0};
    }

    ngOnInit(): void{
        this.myForm = this._formBuilder.group({
            itemName: ['', Validators.required],
            amount: ['', Validators.compose([
                Validators.required,
                amountOver
            ])]
        });
    }
}


function amountOver(item: Control): {[s: string]: boolean}{
    if(item.value <=0){
        return {notEnough: true}
    }
}