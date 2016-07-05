import {Injectable} from "angular2/core";
@Injectable()
export class DataService{
    private _data: string[] = ['Summer', 'Winter', 'Warm', 'Cold'];
    getRandomsString(): string{
        let randNum = Math.floor(Math.random() * this._data.length);
        return this._data[randNum];
    }
    
    insert(item: string): void{
        this._data.push(item);
    }
}