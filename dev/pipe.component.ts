import {Component} from "angular2/core";
import {ReversePipe} from "./reverse.pipe";

@Component({
    selector: 'pipe-component',
    templateUrl: './dev/pipe.tpl.html',
    pipes: [ReversePipe]
})

export class PipeComponent{
    date = new Date();
    stateFullPipeOutput = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Data is there')
        }, 2000)
    });
    
}