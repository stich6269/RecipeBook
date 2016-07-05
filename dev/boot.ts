///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {DataService} from "./shopping-list/services/data.services";

bootstrap(AppComponent, [DataService]);
