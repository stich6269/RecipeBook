import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators, Control} from "angular2/common";

@Component({
    selector: 'template-driven-form',
    template: `
        <h2>Sign-up form</h2>
        <form (submit)="onSubmit()" [ngFormModel]="myForm">
            <div>
                <label for="mail">Mail</label>
                <input type="text" id="mail" [ngFormControl]="myForm.controls['email']" #email="ngForm">
                <span *ngIf="!email.valid" class="validation-error">Is not valid</span>
            </div>                   
            
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" [ngFormControl]="myForm.controls['password']" #password="ngForm">
                <span *ngIf="!password.valid" class="validation-error" >Is not valid</span>
            </div>                  
             
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" [ngFormControl]="myForm.controls['confirmPassword']" #confirmPassword="ngForm">
                <span *ngIf="!confirmPassword.valid" class="validation-error">Is not valid</span>
            </div>                
            
            <button type="submit">Submit</button>
        </form>
        
        <h2>You submitted</h2>
        <div>Mail: {{user.email}}</div>
        <div>Password: {{user.password}}</div>
    `
})

export class DataDrivenFormComponent implements OnInit{
    user: {email: string, password: string} = {email: '', password: ''};
    myForm: ControlGroup;
    constructor(private _formBuilder: FormBuilder){};
    ngOnInit(): void{
        this.myForm = this._formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.compose([
                Validators.required,
                hasNumbers,
            ])],
            confirmPassword: ['', Validators.required]
        })
    }
    onSubmit(): void{
        this.user = this.myForm.value;
    }
}

function hasNumbers(control: Control): {[s: string]: boolean}{
    if(!control.value.match('\\d+')){
        return {noNumbers: true};
    }
}
