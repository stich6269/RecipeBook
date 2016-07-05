import {Component} from 'angular2/core';

@Component({
    selector: 'template-driven-form',
    template: `
        <h2>Sign-up form</h2>
        <form (submit)="onSubmit(f)" #f="ngForm">
            <div>
                <label for="mail">Mail</label>
                <input ngControl="mail" type="text" id="mail" required #email="ngForm">
                <span class="validation-error" *ngIf="!email.valid">Is not valid</span>
            </div>                   
            
            <div>
                <label for="password">Password</label>
                <input ngControl="password" type="password" id="password" required  #password="ngForm">
                <span class="validation-error" *ngIf="!password.valid">Is not valid</span>
            </div>                  
             
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input ngControl="confirm-password" type="password" id="confirm-password" required  #confirmPassword="ngForm">
                <span class="validation-error" *ngIf="!confirmPassword.valid">Is not valid</span>
            </div>                
            
            <button [disabled]="!f.valid || password.value != confirmPassword.value" type="submit"> Submit</button>
        </form>
        
        <h2>You submitted</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.password}}</div>
    `
})

export class TemplateDrivenFormComponent{
    user: {mail: string, password: string} = {mail: '', password: ''};
    onSubmit(form): void{
        this.user.mail = form.value['mail'];
        this.user.password = form.value['password'];
    }
}
