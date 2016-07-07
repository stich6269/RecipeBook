import {Component} from 'angular2/core';
import {HttpService} from "./http.service";

@Component({
    selector: 'app',
    templateUrl: 'dev/app.tpl.html',
    providers: [HttpService]
})

export class AppComponent{
    response: string;
    constructor(private _http: HttpService){};
    onGetPosts(): void{
        this._http.getPosts()
            .subscribe(
                response => this.response = response,
                error => console.log(error)
            )
    }

    createPost(title: string, body: string, userId: number): void{
        let data: {title: string, body: string, userId: number} = {
            title: title,
            body: body,
            userId: +userId
        };

        this._http.createPost(data)
            .subscribe(
                response => this.response = response,
                error => console.log(error)
            )
    }
}
