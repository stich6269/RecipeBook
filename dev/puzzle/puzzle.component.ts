import {Component} from "angular2/core";
import {OnInit} from "angular2/core";

@Component({
    selector: 'my-puzzle',
    templateUrl: 'dev/puzzle/puzzle.tpl.html'
})

export class PuzzleComponent implements OnInit{
    number1: number;
    number2: number;
    number3: number;
    number4: number;
    ngOnInit(): any{
        this.number1 = Math.round(Math.random());
        this.number2 = Math.round(Math.random());
        this.number3 = Math.round(Math.random());
        this.number4 = Math.round(Math.random());
        
        console.log(this)
    }
}