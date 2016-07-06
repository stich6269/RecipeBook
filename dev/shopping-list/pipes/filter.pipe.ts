import {Pipe, PipeTransform} from "angular2/core";
import {ListItem} from "./../models/list-item";

@Pipe({
    name: 'myFilter'
})

export class FilterPipe implements PipeTransform{
    transform(value: ListItem[], args: string[]): any {
        if(value.length ==0) return value;

        let resultArr = [];
        for (let item of value){
            if (item.name.indexOf(args[0]) != -1){
                resultArr.push(item);
            }
        }

        return resultArr
    }
}