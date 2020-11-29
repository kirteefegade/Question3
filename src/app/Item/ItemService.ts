import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable()
export class ItemService{
    itemarr=[
        new Item("lays",2,30,"This is lays"),
        new Item("dairymilk",5,50,"This is dairymilk"),
        new Item("nachos",3,30,"This is nachos"),
        new Item("chocolate",20,100,"This is chocolate"),
        new Item("puffs",1,10,"this is puffs")
    ]

    getAllItems():Item[]{
        return this.itemarr;
    }
    addItem(item:Item){
        this.itemarr.push(item);
    }

}