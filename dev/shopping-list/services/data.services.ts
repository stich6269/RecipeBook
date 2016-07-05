import {Injectable} from "angular2/core";
import {ListItem} from "../models/list-item";
import {shopping_list} from "../models/moc-shopping-list";

@Injectable()

export class DataService{
    getItems(): ListItem[] {
        return shopping_list;
    }
    
    insertItem(item: ListItem):void {
        shopping_list.push(item);
    }
    
    deleteItem(item: ListItem):void {
        shopping_list.splice(shopping_list.indexOf(item), 1);
    }
}