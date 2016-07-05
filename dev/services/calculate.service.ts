import {Injectable} from "angular2/core";
@Injectable()
export class CalculateService{
    add(num1: number, num2: number): number{
        return num1+num2;
    }    
    multiply(num1: number, num2: number): number{
        return num1*num2;
    }
}