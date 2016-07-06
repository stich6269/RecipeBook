import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: 'myReverse'
})

export class ReversePipe implements PipeTransform{

    transform(value: string, args:any): string{
        const length: number = value.length;
        let resultString: string = '';

        for (var i = 0; i < length; i++) {
            resultString = value[i] + resultString;
        }

        return resultString
    }
}