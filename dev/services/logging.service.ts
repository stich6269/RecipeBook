import { Injectable } from 'angular2/core';

@Injectable()
export class HeroService {
    log(message: string){
        console.log(message);
    }
}